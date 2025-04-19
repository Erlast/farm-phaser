import {Server} from 'socket.io';
import http from 'http';
import {prisma} from "./prisma/client";

export function initSocket(server: http.Server) {
    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        socket.on('plant-seed', async ({plotIndex, seedId, userId}) => {
            console.log(`User ${userId} planted seed ${seedId} in plot ${plotIndex}`);

            // Здесь логика сохранения в БД
            // И установка таймера вызова события "seed-ready"

            try {
                // Получаем персонажа по userId
                const character = await prisma.character.findFirst({
                    where: {userId},
                    include: {plots: true}
                });

                if (!character) {
                    console.error(`Character not found for user ${userId}`);
                    return;
                }

                // const plot = character.plots[plotIndex];
                // if (!plot) {
                //     console.error(`Plot index ${plotIndex} not found`);
                //     return;
                // }

                const seed = await prisma.seed.findUnique({
                    where: {id: seedId}
                });

                if (!seed) {
                    console.error(`Seed ${seedId} not found`);
                    return;
                }

                const plantedAt = new Date();
                const growTimeMs = seed.growTime

                // Сохраняем семя в грядку
                await prisma.plot.update({
                    where: {id: plotIndex},
                    data: {
                        seedId: seedId,
                        plantedAt: plantedAt
                    }
                });

                setTimeout(async () => {
                    await prisma.plot.update({
                        where: {id: plotIndex},
                        data: {
                            seedId: seedId,
                            plantedAt: plantedAt,
                            isReady: true
                        }
                    });
                    socket.emit('seed-ready', {plotIndex, seedId});
                }, growTimeMs);
            } catch (error) {
                console.error('Ошибка при посадке семени:', error);
            }
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });

    return io;
}