
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model LevelRequirement
 * 
 */
export type LevelRequirement = $Result.DefaultSelection<Prisma.$LevelRequirementPayload>
/**
 * Model Seed
 * 
 */
export type Seed = $Result.DefaultSelection<Prisma.$SeedPayload>
/**
 * Model Plot
 * 
 */
export type Plot = $Result.DefaultSelection<Prisma.$PlotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  M: 'M',
  F: 'F'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levelRequirement`: Exposes CRUD operations for the **LevelRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelRequirements
    * const levelRequirements = await prisma.levelRequirement.findMany()
    * ```
    */
  get levelRequirement(): Prisma.LevelRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seed`: Exposes CRUD operations for the **Seed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seeds
    * const seeds = await prisma.seed.findMany()
    * ```
    */
  get seed(): Prisma.SeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plot`: Exposes CRUD operations for the **Plot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plots
    * const plots = await prisma.plot.findMany()
    * ```
    */
  get plot(): Prisma.PlotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Character: 'Character',
    LevelRequirement: 'LevelRequirement',
    Seed: 'Seed',
    Plot: 'Plot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "character" | "levelRequirement" | "seed" | "plot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      LevelRequirement: {
        payload: Prisma.$LevelRequirementPayload<ExtArgs>
        fields: Prisma.LevelRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          findFirst: {
            args: Prisma.LevelRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          findMany: {
            args: Prisma.LevelRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>[]
          }
          create: {
            args: Prisma.LevelRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          createMany: {
            args: Prisma.LevelRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>[]
          }
          delete: {
            args: Prisma.LevelRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          update: {
            args: Prisma.LevelRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          deleteMany: {
            args: Prisma.LevelRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>[]
          }
          upsert: {
            args: Prisma.LevelRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRequirementPayload>
          }
          aggregate: {
            args: Prisma.LevelRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelRequirement>
          }
          groupBy: {
            args: Prisma.LevelRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<LevelRequirementCountAggregateOutputType> | number
          }
        }
      }
      Seed: {
        payload: Prisma.$SeedPayload<ExtArgs>
        fields: Prisma.SeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          findFirst: {
            args: Prisma.SeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          findMany: {
            args: Prisma.SeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>[]
          }
          create: {
            args: Prisma.SeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          createMany: {
            args: Prisma.SeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>[]
          }
          delete: {
            args: Prisma.SeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          update: {
            args: Prisma.SeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          deleteMany: {
            args: Prisma.SeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>[]
          }
          upsert: {
            args: Prisma.SeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedPayload>
          }
          aggregate: {
            args: Prisma.SeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeed>
          }
          groupBy: {
            args: Prisma.SeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeedCountArgs<ExtArgs>
            result: $Utils.Optional<SeedCountAggregateOutputType> | number
          }
        }
      }
      Plot: {
        payload: Prisma.$PlotPayload<ExtArgs>
        fields: Prisma.PlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          findFirst: {
            args: Prisma.PlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          findMany: {
            args: Prisma.PlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>[]
          }
          create: {
            args: Prisma.PlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          createMany: {
            args: Prisma.PlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>[]
          }
          delete: {
            args: Prisma.PlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          update: {
            args: Prisma.PlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          deleteMany: {
            args: Prisma.PlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>[]
          }
          upsert: {
            args: Prisma.PlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlotPayload>
          }
          aggregate: {
            args: Prisma.PlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlot>
          }
          groupBy: {
            args: Prisma.PlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlotCountArgs<ExtArgs>
            result: $Utils.Optional<PlotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    character?: CharacterOmit
    levelRequirement?: LevelRequirementOmit
    seed?: SeedOmit
    plot?: PlotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    plots: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plots?: boolean | CharacterCountOutputTypeCountPlotsArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountPlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlotWhereInput
  }


  /**
   * Count Type SeedCountOutputType
   */

  export type SeedCountOutputType = {
    Plot: number
  }

  export type SeedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plot?: boolean | SeedCountOutputTypeCountPlotArgs
  }

  // Custom InputTypes
  /**
   * SeedCountOutputType without action
   */
  export type SeedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedCountOutputType
     */
    select?: SeedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeedCountOutputType without action
   */
  export type SeedCountOutputTypeCountPlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    Character?: boolean | User$CharacterArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | User$CharacterArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Character: Prisma.$CharacterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Character<T extends User$CharacterArgs<ExtArgs> = {}>(args?: Subset<T, User$CharacterArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Character
   */
  export type User$CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    level: number | null
    experience: number | null
    coins: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    userId: number | null
    level: number | null
    experience: number | null
    coins: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    userId: number | null
    gender: $Enums.Gender | null
    level: number | null
    experience: number | null
    coins: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    gender: $Enums.Gender | null
    level: number | null
    experience: number | null
    coins: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    level: number
    experience: number
    coins: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    experience?: true
    coins?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    experience?: true
    coins?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    level?: true
    experience?: true
    coins?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    level?: true
    experience?: true
    coins?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    level?: true
    experience?: true
    coins?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    userId: number
    gender: $Enums.Gender | null
    level: number
    experience: number
    coins: number
    createdAt: Date
    updatedAt: Date
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    level?: boolean
    experience?: boolean
    coins?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plots?: boolean | Character$plotsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    level?: boolean
    experience?: boolean
    coins?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    level?: boolean
    experience?: boolean
    coins?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    level?: boolean
    experience?: boolean
    coins?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "level" | "experience" | "coins" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plots?: boolean | Character$plotsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plots: Prisma.$PlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      gender: $Enums.Gender | null
      level: number
      experience: number
      coins: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plots<T extends Character$plotsArgs<ExtArgs> = {}>(args?: Subset<T, Character$plotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'Int'>
    readonly userId: FieldRef<"Character", 'Int'>
    readonly gender: FieldRef<"Character", 'Gender'>
    readonly level: FieldRef<"Character", 'Int'>
    readonly experience: FieldRef<"Character", 'Int'>
    readonly coins: FieldRef<"Character", 'Int'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.plots
   */
  export type Character$plotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    where?: PlotWhereInput
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    cursor?: PlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model LevelRequirement
   */

  export type AggregateLevelRequirement = {
    _count: LevelRequirementCountAggregateOutputType | null
    _avg: LevelRequirementAvgAggregateOutputType | null
    _sum: LevelRequirementSumAggregateOutputType | null
    _min: LevelRequirementMinAggregateOutputType | null
    _max: LevelRequirementMaxAggregateOutputType | null
  }

  export type LevelRequirementAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xpRequired: number | null
  }

  export type LevelRequirementSumAggregateOutputType = {
    id: number | null
    level: number | null
    xpRequired: number | null
  }

  export type LevelRequirementMinAggregateOutputType = {
    id: number | null
    level: number | null
    xpRequired: number | null
  }

  export type LevelRequirementMaxAggregateOutputType = {
    id: number | null
    level: number | null
    xpRequired: number | null
  }

  export type LevelRequirementCountAggregateOutputType = {
    id: number
    level: number
    xpRequired: number
    _all: number
  }


  export type LevelRequirementAvgAggregateInputType = {
    id?: true
    level?: true
    xpRequired?: true
  }

  export type LevelRequirementSumAggregateInputType = {
    id?: true
    level?: true
    xpRequired?: true
  }

  export type LevelRequirementMinAggregateInputType = {
    id?: true
    level?: true
    xpRequired?: true
  }

  export type LevelRequirementMaxAggregateInputType = {
    id?: true
    level?: true
    xpRequired?: true
  }

  export type LevelRequirementCountAggregateInputType = {
    id?: true
    level?: true
    xpRequired?: true
    _all?: true
  }

  export type LevelRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelRequirement to aggregate.
     */
    where?: LevelRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRequirements to fetch.
     */
    orderBy?: LevelRequirementOrderByWithRelationInput | LevelRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelRequirements
    **/
    _count?: true | LevelRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelRequirementMaxAggregateInputType
  }

  export type GetLevelRequirementAggregateType<T extends LevelRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelRequirement[P]>
      : GetScalarType<T[P], AggregateLevelRequirement[P]>
  }




  export type LevelRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelRequirementWhereInput
    orderBy?: LevelRequirementOrderByWithAggregationInput | LevelRequirementOrderByWithAggregationInput[]
    by: LevelRequirementScalarFieldEnum[] | LevelRequirementScalarFieldEnum
    having?: LevelRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelRequirementCountAggregateInputType | true
    _avg?: LevelRequirementAvgAggregateInputType
    _sum?: LevelRequirementSumAggregateInputType
    _min?: LevelRequirementMinAggregateInputType
    _max?: LevelRequirementMaxAggregateInputType
  }

  export type LevelRequirementGroupByOutputType = {
    id: number
    level: number
    xpRequired: number
    _count: LevelRequirementCountAggregateOutputType | null
    _avg: LevelRequirementAvgAggregateOutputType | null
    _sum: LevelRequirementSumAggregateOutputType | null
    _min: LevelRequirementMinAggregateOutputType | null
    _max: LevelRequirementMaxAggregateOutputType | null
  }

  type GetLevelRequirementGroupByPayload<T extends LevelRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], LevelRequirementGroupByOutputType[P]>
        }
      >
    >


  export type LevelRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xpRequired?: boolean
  }, ExtArgs["result"]["levelRequirement"]>

  export type LevelRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xpRequired?: boolean
  }, ExtArgs["result"]["levelRequirement"]>

  export type LevelRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xpRequired?: boolean
  }, ExtArgs["result"]["levelRequirement"]>

  export type LevelRequirementSelectScalar = {
    id?: boolean
    level?: boolean
    xpRequired?: boolean
  }

  export type LevelRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "xpRequired", ExtArgs["result"]["levelRequirement"]>

  export type $LevelRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelRequirement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: number
      xpRequired: number
    }, ExtArgs["result"]["levelRequirement"]>
    composites: {}
  }

  type LevelRequirementGetPayload<S extends boolean | null | undefined | LevelRequirementDefaultArgs> = $Result.GetResult<Prisma.$LevelRequirementPayload, S>

  type LevelRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelRequirementCountAggregateInputType | true
    }

  export interface LevelRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelRequirement'], meta: { name: 'LevelRequirement' } }
    /**
     * Find zero or one LevelRequirement that matches the filter.
     * @param {LevelRequirementFindUniqueArgs} args - Arguments to find a LevelRequirement
     * @example
     * // Get one LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelRequirementFindUniqueArgs>(args: SelectSubset<T, LevelRequirementFindUniqueArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LevelRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelRequirementFindUniqueOrThrowArgs} args - Arguments to find a LevelRequirement
     * @example
     * // Get one LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementFindFirstArgs} args - Arguments to find a LevelRequirement
     * @example
     * // Get one LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelRequirementFindFirstArgs>(args?: SelectSubset<T, LevelRequirementFindFirstArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementFindFirstOrThrowArgs} args - Arguments to find a LevelRequirement
     * @example
     * // Get one LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LevelRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelRequirements
     * const levelRequirements = await prisma.levelRequirement.findMany()
     * 
     * // Get first 10 LevelRequirements
     * const levelRequirements = await prisma.levelRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelRequirementWithIdOnly = await prisma.levelRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelRequirementFindManyArgs>(args?: SelectSubset<T, LevelRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LevelRequirement.
     * @param {LevelRequirementCreateArgs} args - Arguments to create a LevelRequirement.
     * @example
     * // Create one LevelRequirement
     * const LevelRequirement = await prisma.levelRequirement.create({
     *   data: {
     *     // ... data to create a LevelRequirement
     *   }
     * })
     * 
     */
    create<T extends LevelRequirementCreateArgs>(args: SelectSubset<T, LevelRequirementCreateArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LevelRequirements.
     * @param {LevelRequirementCreateManyArgs} args - Arguments to create many LevelRequirements.
     * @example
     * // Create many LevelRequirements
     * const levelRequirement = await prisma.levelRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelRequirementCreateManyArgs>(args?: SelectSubset<T, LevelRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelRequirements and returns the data saved in the database.
     * @param {LevelRequirementCreateManyAndReturnArgs} args - Arguments to create many LevelRequirements.
     * @example
     * // Create many LevelRequirements
     * const levelRequirement = await prisma.levelRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelRequirements and only return the `id`
     * const levelRequirementWithIdOnly = await prisma.levelRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LevelRequirement.
     * @param {LevelRequirementDeleteArgs} args - Arguments to delete one LevelRequirement.
     * @example
     * // Delete one LevelRequirement
     * const LevelRequirement = await prisma.levelRequirement.delete({
     *   where: {
     *     // ... filter to delete one LevelRequirement
     *   }
     * })
     * 
     */
    delete<T extends LevelRequirementDeleteArgs>(args: SelectSubset<T, LevelRequirementDeleteArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LevelRequirement.
     * @param {LevelRequirementUpdateArgs} args - Arguments to update one LevelRequirement.
     * @example
     * // Update one LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelRequirementUpdateArgs>(args: SelectSubset<T, LevelRequirementUpdateArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LevelRequirements.
     * @param {LevelRequirementDeleteManyArgs} args - Arguments to filter LevelRequirements to delete.
     * @example
     * // Delete a few LevelRequirements
     * const { count } = await prisma.levelRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelRequirementDeleteManyArgs>(args?: SelectSubset<T, LevelRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelRequirements
     * const levelRequirement = await prisma.levelRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelRequirementUpdateManyArgs>(args: SelectSubset<T, LevelRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelRequirements and returns the data updated in the database.
     * @param {LevelRequirementUpdateManyAndReturnArgs} args - Arguments to update many LevelRequirements.
     * @example
     * // Update many LevelRequirements
     * const levelRequirement = await prisma.levelRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LevelRequirements and only return the `id`
     * const levelRequirementWithIdOnly = await prisma.levelRequirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LevelRequirement.
     * @param {LevelRequirementUpsertArgs} args - Arguments to update or create a LevelRequirement.
     * @example
     * // Update or create a LevelRequirement
     * const levelRequirement = await prisma.levelRequirement.upsert({
     *   create: {
     *     // ... data to create a LevelRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelRequirement we want to update
     *   }
     * })
     */
    upsert<T extends LevelRequirementUpsertArgs>(args: SelectSubset<T, LevelRequirementUpsertArgs<ExtArgs>>): Prisma__LevelRequirementClient<$Result.GetResult<Prisma.$LevelRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LevelRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementCountArgs} args - Arguments to filter LevelRequirements to count.
     * @example
     * // Count the number of LevelRequirements
     * const count = await prisma.levelRequirement.count({
     *   where: {
     *     // ... the filter for the LevelRequirements we want to count
     *   }
     * })
    **/
    count<T extends LevelRequirementCountArgs>(
      args?: Subset<T, LevelRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelRequirementAggregateArgs>(args: Subset<T, LevelRequirementAggregateArgs>): Prisma.PrismaPromise<GetLevelRequirementAggregateType<T>>

    /**
     * Group by LevelRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelRequirementGroupByArgs['orderBy'] }
        : { orderBy?: LevelRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelRequirement model
   */
  readonly fields: LevelRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LevelRequirement model
   */
  interface LevelRequirementFieldRefs {
    readonly id: FieldRef<"LevelRequirement", 'Int'>
    readonly level: FieldRef<"LevelRequirement", 'Int'>
    readonly xpRequired: FieldRef<"LevelRequirement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LevelRequirement findUnique
   */
  export type LevelRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter, which LevelRequirement to fetch.
     */
    where: LevelRequirementWhereUniqueInput
  }

  /**
   * LevelRequirement findUniqueOrThrow
   */
  export type LevelRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter, which LevelRequirement to fetch.
     */
    where: LevelRequirementWhereUniqueInput
  }

  /**
   * LevelRequirement findFirst
   */
  export type LevelRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter, which LevelRequirement to fetch.
     */
    where?: LevelRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRequirements to fetch.
     */
    orderBy?: LevelRequirementOrderByWithRelationInput | LevelRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelRequirements.
     */
    cursor?: LevelRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelRequirements.
     */
    distinct?: LevelRequirementScalarFieldEnum | LevelRequirementScalarFieldEnum[]
  }

  /**
   * LevelRequirement findFirstOrThrow
   */
  export type LevelRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter, which LevelRequirement to fetch.
     */
    where?: LevelRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRequirements to fetch.
     */
    orderBy?: LevelRequirementOrderByWithRelationInput | LevelRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelRequirements.
     */
    cursor?: LevelRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelRequirements.
     */
    distinct?: LevelRequirementScalarFieldEnum | LevelRequirementScalarFieldEnum[]
  }

  /**
   * LevelRequirement findMany
   */
  export type LevelRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter, which LevelRequirements to fetch.
     */
    where?: LevelRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRequirements to fetch.
     */
    orderBy?: LevelRequirementOrderByWithRelationInput | LevelRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelRequirements.
     */
    cursor?: LevelRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRequirements.
     */
    skip?: number
    distinct?: LevelRequirementScalarFieldEnum | LevelRequirementScalarFieldEnum[]
  }

  /**
   * LevelRequirement create
   */
  export type LevelRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * The data needed to create a LevelRequirement.
     */
    data: XOR<LevelRequirementCreateInput, LevelRequirementUncheckedCreateInput>
  }

  /**
   * LevelRequirement createMany
   */
  export type LevelRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelRequirements.
     */
    data: LevelRequirementCreateManyInput | LevelRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelRequirement createManyAndReturn
   */
  export type LevelRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many LevelRequirements.
     */
    data: LevelRequirementCreateManyInput | LevelRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelRequirement update
   */
  export type LevelRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * The data needed to update a LevelRequirement.
     */
    data: XOR<LevelRequirementUpdateInput, LevelRequirementUncheckedUpdateInput>
    /**
     * Choose, which LevelRequirement to update.
     */
    where: LevelRequirementWhereUniqueInput
  }

  /**
   * LevelRequirement updateMany
   */
  export type LevelRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelRequirements.
     */
    data: XOR<LevelRequirementUpdateManyMutationInput, LevelRequirementUncheckedUpdateManyInput>
    /**
     * Filter which LevelRequirements to update
     */
    where?: LevelRequirementWhereInput
    /**
     * Limit how many LevelRequirements to update.
     */
    limit?: number
  }

  /**
   * LevelRequirement updateManyAndReturn
   */
  export type LevelRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * The data used to update LevelRequirements.
     */
    data: XOR<LevelRequirementUpdateManyMutationInput, LevelRequirementUncheckedUpdateManyInput>
    /**
     * Filter which LevelRequirements to update
     */
    where?: LevelRequirementWhereInput
    /**
     * Limit how many LevelRequirements to update.
     */
    limit?: number
  }

  /**
   * LevelRequirement upsert
   */
  export type LevelRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * The filter to search for the LevelRequirement to update in case it exists.
     */
    where: LevelRequirementWhereUniqueInput
    /**
     * In case the LevelRequirement found by the `where` argument doesn't exist, create a new LevelRequirement with this data.
     */
    create: XOR<LevelRequirementCreateInput, LevelRequirementUncheckedCreateInput>
    /**
     * In case the LevelRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelRequirementUpdateInput, LevelRequirementUncheckedUpdateInput>
  }

  /**
   * LevelRequirement delete
   */
  export type LevelRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
    /**
     * Filter which LevelRequirement to delete.
     */
    where: LevelRequirementWhereUniqueInput
  }

  /**
   * LevelRequirement deleteMany
   */
  export type LevelRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelRequirements to delete
     */
    where?: LevelRequirementWhereInput
    /**
     * Limit how many LevelRequirements to delete.
     */
    limit?: number
  }

  /**
   * LevelRequirement without action
   */
  export type LevelRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelRequirement
     */
    select?: LevelRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelRequirement
     */
    omit?: LevelRequirementOmit<ExtArgs> | null
  }


  /**
   * Model Seed
   */

  export type AggregateSeed = {
    _count: SeedCountAggregateOutputType | null
    _avg: SeedAvgAggregateOutputType | null
    _sum: SeedSumAggregateOutputType | null
    _min: SeedMinAggregateOutputType | null
    _max: SeedMaxAggregateOutputType | null
  }

  export type SeedAvgAggregateOutputType = {
    id: number | null
    growTime: number | null
    xp: number | null
    buyPrice: number | null
    sellPrice: number | null
  }

  export type SeedSumAggregateOutputType = {
    id: number | null
    growTime: number | null
    xp: number | null
    buyPrice: number | null
    sellPrice: number | null
  }

  export type SeedMinAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    texture: string | null
    growTime: number | null
    xp: number | null
    buyPrice: number | null
    sellPrice: number | null
  }

  export type SeedMaxAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    texture: string | null
    growTime: number | null
    xp: number | null
    buyPrice: number | null
    sellPrice: number | null
  }

  export type SeedCountAggregateOutputType = {
    id: number
    key: number
    name: number
    texture: number
    growTime: number
    xp: number
    buyPrice: number
    sellPrice: number
    _all: number
  }


  export type SeedAvgAggregateInputType = {
    id?: true
    growTime?: true
    xp?: true
    buyPrice?: true
    sellPrice?: true
  }

  export type SeedSumAggregateInputType = {
    id?: true
    growTime?: true
    xp?: true
    buyPrice?: true
    sellPrice?: true
  }

  export type SeedMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    texture?: true
    growTime?: true
    xp?: true
    buyPrice?: true
    sellPrice?: true
  }

  export type SeedMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    texture?: true
    growTime?: true
    xp?: true
    buyPrice?: true
    sellPrice?: true
  }

  export type SeedCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    texture?: true
    growTime?: true
    xp?: true
    buyPrice?: true
    sellPrice?: true
    _all?: true
  }

  export type SeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seed to aggregate.
     */
    where?: SeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeds to fetch.
     */
    orderBy?: SeedOrderByWithRelationInput | SeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seeds
    **/
    _count?: true | SeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeedMaxAggregateInputType
  }

  export type GetSeedAggregateType<T extends SeedAggregateArgs> = {
        [P in keyof T & keyof AggregateSeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeed[P]>
      : GetScalarType<T[P], AggregateSeed[P]>
  }




  export type SeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedWhereInput
    orderBy?: SeedOrderByWithAggregationInput | SeedOrderByWithAggregationInput[]
    by: SeedScalarFieldEnum[] | SeedScalarFieldEnum
    having?: SeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeedCountAggregateInputType | true
    _avg?: SeedAvgAggregateInputType
    _sum?: SeedSumAggregateInputType
    _min?: SeedMinAggregateInputType
    _max?: SeedMaxAggregateInputType
  }

  export type SeedGroupByOutputType = {
    id: number
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice: number
    sellPrice: number
    _count: SeedCountAggregateOutputType | null
    _avg: SeedAvgAggregateOutputType | null
    _sum: SeedSumAggregateOutputType | null
    _min: SeedMinAggregateOutputType | null
    _max: SeedMaxAggregateOutputType | null
  }

  type GetSeedGroupByPayload<T extends SeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeedGroupByOutputType[P]>
            : GetScalarType<T[P], SeedGroupByOutputType[P]>
        }
      >
    >


  export type SeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    texture?: boolean
    growTime?: boolean
    xp?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
    Plot?: boolean | Seed$PlotArgs<ExtArgs>
    _count?: boolean | SeedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seed"]>

  export type SeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    texture?: boolean
    growTime?: boolean
    xp?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
  }, ExtArgs["result"]["seed"]>

  export type SeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    texture?: boolean
    growTime?: boolean
    xp?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
  }, ExtArgs["result"]["seed"]>

  export type SeedSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    texture?: boolean
    growTime?: boolean
    xp?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
  }

  export type SeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "texture" | "growTime" | "xp" | "buyPrice" | "sellPrice", ExtArgs["result"]["seed"]>
  export type SeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plot?: boolean | Seed$PlotArgs<ExtArgs>
    _count?: boolean | SeedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seed"
    objects: {
      Plot: Prisma.$PlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: string
      texture: string
      growTime: number
      xp: number
      buyPrice: number
      sellPrice: number
    }, ExtArgs["result"]["seed"]>
    composites: {}
  }

  type SeedGetPayload<S extends boolean | null | undefined | SeedDefaultArgs> = $Result.GetResult<Prisma.$SeedPayload, S>

  type SeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeedCountAggregateInputType | true
    }

  export interface SeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seed'], meta: { name: 'Seed' } }
    /**
     * Find zero or one Seed that matches the filter.
     * @param {SeedFindUniqueArgs} args - Arguments to find a Seed
     * @example
     * // Get one Seed
     * const seed = await prisma.seed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeedFindUniqueArgs>(args: SelectSubset<T, SeedFindUniqueArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeedFindUniqueOrThrowArgs} args - Arguments to find a Seed
     * @example
     * // Get one Seed
     * const seed = await prisma.seed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeedFindUniqueOrThrowArgs>(args: SelectSubset<T, SeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedFindFirstArgs} args - Arguments to find a Seed
     * @example
     * // Get one Seed
     * const seed = await prisma.seed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeedFindFirstArgs>(args?: SelectSubset<T, SeedFindFirstArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedFindFirstOrThrowArgs} args - Arguments to find a Seed
     * @example
     * // Get one Seed
     * const seed = await prisma.seed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeedFindFirstOrThrowArgs>(args?: SelectSubset<T, SeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seeds
     * const seeds = await prisma.seed.findMany()
     * 
     * // Get first 10 Seeds
     * const seeds = await prisma.seed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seedWithIdOnly = await prisma.seed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeedFindManyArgs>(args?: SelectSubset<T, SeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seed.
     * @param {SeedCreateArgs} args - Arguments to create a Seed.
     * @example
     * // Create one Seed
     * const Seed = await prisma.seed.create({
     *   data: {
     *     // ... data to create a Seed
     *   }
     * })
     * 
     */
    create<T extends SeedCreateArgs>(args: SelectSubset<T, SeedCreateArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seeds.
     * @param {SeedCreateManyArgs} args - Arguments to create many Seeds.
     * @example
     * // Create many Seeds
     * const seed = await prisma.seed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeedCreateManyArgs>(args?: SelectSubset<T, SeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seeds and returns the data saved in the database.
     * @param {SeedCreateManyAndReturnArgs} args - Arguments to create many Seeds.
     * @example
     * // Create many Seeds
     * const seed = await prisma.seed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seeds and only return the `id`
     * const seedWithIdOnly = await prisma.seed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeedCreateManyAndReturnArgs>(args?: SelectSubset<T, SeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seed.
     * @param {SeedDeleteArgs} args - Arguments to delete one Seed.
     * @example
     * // Delete one Seed
     * const Seed = await prisma.seed.delete({
     *   where: {
     *     // ... filter to delete one Seed
     *   }
     * })
     * 
     */
    delete<T extends SeedDeleteArgs>(args: SelectSubset<T, SeedDeleteArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seed.
     * @param {SeedUpdateArgs} args - Arguments to update one Seed.
     * @example
     * // Update one Seed
     * const seed = await prisma.seed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeedUpdateArgs>(args: SelectSubset<T, SeedUpdateArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seeds.
     * @param {SeedDeleteManyArgs} args - Arguments to filter Seeds to delete.
     * @example
     * // Delete a few Seeds
     * const { count } = await prisma.seed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeedDeleteManyArgs>(args?: SelectSubset<T, SeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seeds
     * const seed = await prisma.seed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeedUpdateManyArgs>(args: SelectSubset<T, SeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seeds and returns the data updated in the database.
     * @param {SeedUpdateManyAndReturnArgs} args - Arguments to update many Seeds.
     * @example
     * // Update many Seeds
     * const seed = await prisma.seed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seeds and only return the `id`
     * const seedWithIdOnly = await prisma.seed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeedUpdateManyAndReturnArgs>(args: SelectSubset<T, SeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seed.
     * @param {SeedUpsertArgs} args - Arguments to update or create a Seed.
     * @example
     * // Update or create a Seed
     * const seed = await prisma.seed.upsert({
     *   create: {
     *     // ... data to create a Seed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seed we want to update
     *   }
     * })
     */
    upsert<T extends SeedUpsertArgs>(args: SelectSubset<T, SeedUpsertArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedCountArgs} args - Arguments to filter Seeds to count.
     * @example
     * // Count the number of Seeds
     * const count = await prisma.seed.count({
     *   where: {
     *     // ... the filter for the Seeds we want to count
     *   }
     * })
    **/
    count<T extends SeedCountArgs>(
      args?: Subset<T, SeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeedAggregateArgs>(args: Subset<T, SeedAggregateArgs>): Prisma.PrismaPromise<GetSeedAggregateType<T>>

    /**
     * Group by Seed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeedGroupByArgs['orderBy'] }
        : { orderBy?: SeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seed model
   */
  readonly fields: SeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Plot<T extends Seed$PlotArgs<ExtArgs> = {}>(args?: Subset<T, Seed$PlotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seed model
   */
  interface SeedFieldRefs {
    readonly id: FieldRef<"Seed", 'Int'>
    readonly key: FieldRef<"Seed", 'String'>
    readonly name: FieldRef<"Seed", 'String'>
    readonly texture: FieldRef<"Seed", 'String'>
    readonly growTime: FieldRef<"Seed", 'Int'>
    readonly xp: FieldRef<"Seed", 'Int'>
    readonly buyPrice: FieldRef<"Seed", 'Int'>
    readonly sellPrice: FieldRef<"Seed", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Seed findUnique
   */
  export type SeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter, which Seed to fetch.
     */
    where: SeedWhereUniqueInput
  }

  /**
   * Seed findUniqueOrThrow
   */
  export type SeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter, which Seed to fetch.
     */
    where: SeedWhereUniqueInput
  }

  /**
   * Seed findFirst
   */
  export type SeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter, which Seed to fetch.
     */
    where?: SeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeds to fetch.
     */
    orderBy?: SeedOrderByWithRelationInput | SeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seeds.
     */
    cursor?: SeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seeds.
     */
    distinct?: SeedScalarFieldEnum | SeedScalarFieldEnum[]
  }

  /**
   * Seed findFirstOrThrow
   */
  export type SeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter, which Seed to fetch.
     */
    where?: SeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeds to fetch.
     */
    orderBy?: SeedOrderByWithRelationInput | SeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seeds.
     */
    cursor?: SeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seeds.
     */
    distinct?: SeedScalarFieldEnum | SeedScalarFieldEnum[]
  }

  /**
   * Seed findMany
   */
  export type SeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter, which Seeds to fetch.
     */
    where?: SeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeds to fetch.
     */
    orderBy?: SeedOrderByWithRelationInput | SeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seeds.
     */
    cursor?: SeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeds.
     */
    skip?: number
    distinct?: SeedScalarFieldEnum | SeedScalarFieldEnum[]
  }

  /**
   * Seed create
   */
  export type SeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * The data needed to create a Seed.
     */
    data: XOR<SeedCreateInput, SeedUncheckedCreateInput>
  }

  /**
   * Seed createMany
   */
  export type SeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seeds.
     */
    data: SeedCreateManyInput | SeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seed createManyAndReturn
   */
  export type SeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * The data used to create many Seeds.
     */
    data: SeedCreateManyInput | SeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seed update
   */
  export type SeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * The data needed to update a Seed.
     */
    data: XOR<SeedUpdateInput, SeedUncheckedUpdateInput>
    /**
     * Choose, which Seed to update.
     */
    where: SeedWhereUniqueInput
  }

  /**
   * Seed updateMany
   */
  export type SeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seeds.
     */
    data: XOR<SeedUpdateManyMutationInput, SeedUncheckedUpdateManyInput>
    /**
     * Filter which Seeds to update
     */
    where?: SeedWhereInput
    /**
     * Limit how many Seeds to update.
     */
    limit?: number
  }

  /**
   * Seed updateManyAndReturn
   */
  export type SeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * The data used to update Seeds.
     */
    data: XOR<SeedUpdateManyMutationInput, SeedUncheckedUpdateManyInput>
    /**
     * Filter which Seeds to update
     */
    where?: SeedWhereInput
    /**
     * Limit how many Seeds to update.
     */
    limit?: number
  }

  /**
   * Seed upsert
   */
  export type SeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * The filter to search for the Seed to update in case it exists.
     */
    where: SeedWhereUniqueInput
    /**
     * In case the Seed found by the `where` argument doesn't exist, create a new Seed with this data.
     */
    create: XOR<SeedCreateInput, SeedUncheckedCreateInput>
    /**
     * In case the Seed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeedUpdateInput, SeedUncheckedUpdateInput>
  }

  /**
   * Seed delete
   */
  export type SeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    /**
     * Filter which Seed to delete.
     */
    where: SeedWhereUniqueInput
  }

  /**
   * Seed deleteMany
   */
  export type SeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seeds to delete
     */
    where?: SeedWhereInput
    /**
     * Limit how many Seeds to delete.
     */
    limit?: number
  }

  /**
   * Seed.Plot
   */
  export type Seed$PlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    where?: PlotWhereInput
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    cursor?: PlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[]
  }

  /**
   * Seed without action
   */
  export type SeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
  }


  /**
   * Model Plot
   */

  export type AggregatePlot = {
    _count: PlotCountAggregateOutputType | null
    _avg: PlotAvgAggregateOutputType | null
    _sum: PlotSumAggregateOutputType | null
    _min: PlotMinAggregateOutputType | null
    _max: PlotMaxAggregateOutputType | null
  }

  export type PlotAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    seedId: number | null
  }

  export type PlotSumAggregateOutputType = {
    id: number | null
    characterId: number | null
    seedId: number | null
  }

  export type PlotMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    seedId: number | null
    plantedAt: Date | null
    isReady: boolean | null
  }

  export type PlotMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    seedId: number | null
    plantedAt: Date | null
    isReady: boolean | null
  }

  export type PlotCountAggregateOutputType = {
    id: number
    characterId: number
    seedId: number
    plantedAt: number
    isReady: number
    _all: number
  }


  export type PlotAvgAggregateInputType = {
    id?: true
    characterId?: true
    seedId?: true
  }

  export type PlotSumAggregateInputType = {
    id?: true
    characterId?: true
    seedId?: true
  }

  export type PlotMinAggregateInputType = {
    id?: true
    characterId?: true
    seedId?: true
    plantedAt?: true
    isReady?: true
  }

  export type PlotMaxAggregateInputType = {
    id?: true
    characterId?: true
    seedId?: true
    plantedAt?: true
    isReady?: true
  }

  export type PlotCountAggregateInputType = {
    id?: true
    characterId?: true
    seedId?: true
    plantedAt?: true
    isReady?: true
    _all?: true
  }

  export type PlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plot to aggregate.
     */
    where?: PlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plots to fetch.
     */
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plots
    **/
    _count?: true | PlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlotMaxAggregateInputType
  }

  export type GetPlotAggregateType<T extends PlotAggregateArgs> = {
        [P in keyof T & keyof AggregatePlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlot[P]>
      : GetScalarType<T[P], AggregatePlot[P]>
  }




  export type PlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlotWhereInput
    orderBy?: PlotOrderByWithAggregationInput | PlotOrderByWithAggregationInput[]
    by: PlotScalarFieldEnum[] | PlotScalarFieldEnum
    having?: PlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlotCountAggregateInputType | true
    _avg?: PlotAvgAggregateInputType
    _sum?: PlotSumAggregateInputType
    _min?: PlotMinAggregateInputType
    _max?: PlotMaxAggregateInputType
  }

  export type PlotGroupByOutputType = {
    id: number
    characterId: number
    seedId: number | null
    plantedAt: Date | null
    isReady: boolean
    _count: PlotCountAggregateOutputType | null
    _avg: PlotAvgAggregateOutputType | null
    _sum: PlotSumAggregateOutputType | null
    _min: PlotMinAggregateOutputType | null
    _max: PlotMaxAggregateOutputType | null
  }

  type GetPlotGroupByPayload<T extends PlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlotGroupByOutputType[P]>
            : GetScalarType<T[P], PlotGroupByOutputType[P]>
        }
      >
    >


  export type PlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    seedId?: boolean
    plantedAt?: boolean
    isReady?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }, ExtArgs["result"]["plot"]>

  export type PlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    seedId?: boolean
    plantedAt?: boolean
    isReady?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }, ExtArgs["result"]["plot"]>

  export type PlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    seedId?: boolean
    plantedAt?: boolean
    isReady?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }, ExtArgs["result"]["plot"]>

  export type PlotSelectScalar = {
    id?: boolean
    characterId?: boolean
    seedId?: boolean
    plantedAt?: boolean
    isReady?: boolean
  }

  export type PlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "seedId" | "plantedAt" | "isReady", ExtArgs["result"]["plot"]>
  export type PlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }
  export type PlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }
  export type PlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    seed?: boolean | Plot$seedArgs<ExtArgs>
  }

  export type $PlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plot"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      seed: Prisma.$SeedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      seedId: number | null
      plantedAt: Date | null
      isReady: boolean
    }, ExtArgs["result"]["plot"]>
    composites: {}
  }

  type PlotGetPayload<S extends boolean | null | undefined | PlotDefaultArgs> = $Result.GetResult<Prisma.$PlotPayload, S>

  type PlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlotCountAggregateInputType | true
    }

  export interface PlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plot'], meta: { name: 'Plot' } }
    /**
     * Find zero or one Plot that matches the filter.
     * @param {PlotFindUniqueArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlotFindUniqueArgs>(args: SelectSubset<T, PlotFindUniqueArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlotFindUniqueOrThrowArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlotFindUniqueOrThrowArgs>(args: SelectSubset<T, PlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotFindFirstArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlotFindFirstArgs>(args?: SelectSubset<T, PlotFindFirstArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotFindFirstOrThrowArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlotFindFirstOrThrowArgs>(args?: SelectSubset<T, PlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plots
     * const plots = await prisma.plot.findMany()
     * 
     * // Get first 10 Plots
     * const plots = await prisma.plot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plotWithIdOnly = await prisma.plot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlotFindManyArgs>(args?: SelectSubset<T, PlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plot.
     * @param {PlotCreateArgs} args - Arguments to create a Plot.
     * @example
     * // Create one Plot
     * const Plot = await prisma.plot.create({
     *   data: {
     *     // ... data to create a Plot
     *   }
     * })
     * 
     */
    create<T extends PlotCreateArgs>(args: SelectSubset<T, PlotCreateArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plots.
     * @param {PlotCreateManyArgs} args - Arguments to create many Plots.
     * @example
     * // Create many Plots
     * const plot = await prisma.plot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlotCreateManyArgs>(args?: SelectSubset<T, PlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plots and returns the data saved in the database.
     * @param {PlotCreateManyAndReturnArgs} args - Arguments to create many Plots.
     * @example
     * // Create many Plots
     * const plot = await prisma.plot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plots and only return the `id`
     * const plotWithIdOnly = await prisma.plot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlotCreateManyAndReturnArgs>(args?: SelectSubset<T, PlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plot.
     * @param {PlotDeleteArgs} args - Arguments to delete one Plot.
     * @example
     * // Delete one Plot
     * const Plot = await prisma.plot.delete({
     *   where: {
     *     // ... filter to delete one Plot
     *   }
     * })
     * 
     */
    delete<T extends PlotDeleteArgs>(args: SelectSubset<T, PlotDeleteArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plot.
     * @param {PlotUpdateArgs} args - Arguments to update one Plot.
     * @example
     * // Update one Plot
     * const plot = await prisma.plot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlotUpdateArgs>(args: SelectSubset<T, PlotUpdateArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plots.
     * @param {PlotDeleteManyArgs} args - Arguments to filter Plots to delete.
     * @example
     * // Delete a few Plots
     * const { count } = await prisma.plot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlotDeleteManyArgs>(args?: SelectSubset<T, PlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plots
     * const plot = await prisma.plot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlotUpdateManyArgs>(args: SelectSubset<T, PlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plots and returns the data updated in the database.
     * @param {PlotUpdateManyAndReturnArgs} args - Arguments to update many Plots.
     * @example
     * // Update many Plots
     * const plot = await prisma.plot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plots and only return the `id`
     * const plotWithIdOnly = await prisma.plot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlotUpdateManyAndReturnArgs>(args: SelectSubset<T, PlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plot.
     * @param {PlotUpsertArgs} args - Arguments to update or create a Plot.
     * @example
     * // Update or create a Plot
     * const plot = await prisma.plot.upsert({
     *   create: {
     *     // ... data to create a Plot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plot we want to update
     *   }
     * })
     */
    upsert<T extends PlotUpsertArgs>(args: SelectSubset<T, PlotUpsertArgs<ExtArgs>>): Prisma__PlotClient<$Result.GetResult<Prisma.$PlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotCountArgs} args - Arguments to filter Plots to count.
     * @example
     * // Count the number of Plots
     * const count = await prisma.plot.count({
     *   where: {
     *     // ... the filter for the Plots we want to count
     *   }
     * })
    **/
    count<T extends PlotCountArgs>(
      args?: Subset<T, PlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlotAggregateArgs>(args: Subset<T, PlotAggregateArgs>): Prisma.PrismaPromise<GetPlotAggregateType<T>>

    /**
     * Group by Plot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlotGroupByArgs['orderBy'] }
        : { orderBy?: PlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plot model
   */
  readonly fields: PlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seed<T extends Plot$seedArgs<ExtArgs> = {}>(args?: Subset<T, Plot$seedArgs<ExtArgs>>): Prisma__SeedClient<$Result.GetResult<Prisma.$SeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plot model
   */
  interface PlotFieldRefs {
    readonly id: FieldRef<"Plot", 'Int'>
    readonly characterId: FieldRef<"Plot", 'Int'>
    readonly seedId: FieldRef<"Plot", 'Int'>
    readonly plantedAt: FieldRef<"Plot", 'DateTime'>
    readonly isReady: FieldRef<"Plot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Plot findUnique
   */
  export type PlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter, which Plot to fetch.
     */
    where: PlotWhereUniqueInput
  }

  /**
   * Plot findUniqueOrThrow
   */
  export type PlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter, which Plot to fetch.
     */
    where: PlotWhereUniqueInput
  }

  /**
   * Plot findFirst
   */
  export type PlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter, which Plot to fetch.
     */
    where?: PlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plots to fetch.
     */
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plots.
     */
    cursor?: PlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plots.
     */
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[]
  }

  /**
   * Plot findFirstOrThrow
   */
  export type PlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter, which Plot to fetch.
     */
    where?: PlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plots to fetch.
     */
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plots.
     */
    cursor?: PlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plots.
     */
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[]
  }

  /**
   * Plot findMany
   */
  export type PlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter, which Plots to fetch.
     */
    where?: PlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plots to fetch.
     */
    orderBy?: PlotOrderByWithRelationInput | PlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plots.
     */
    cursor?: PlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plots.
     */
    skip?: number
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[]
  }

  /**
   * Plot create
   */
  export type PlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * The data needed to create a Plot.
     */
    data: XOR<PlotCreateInput, PlotUncheckedCreateInput>
  }

  /**
   * Plot createMany
   */
  export type PlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plots.
     */
    data: PlotCreateManyInput | PlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plot createManyAndReturn
   */
  export type PlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * The data used to create many Plots.
     */
    data: PlotCreateManyInput | PlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plot update
   */
  export type PlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * The data needed to update a Plot.
     */
    data: XOR<PlotUpdateInput, PlotUncheckedUpdateInput>
    /**
     * Choose, which Plot to update.
     */
    where: PlotWhereUniqueInput
  }

  /**
   * Plot updateMany
   */
  export type PlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plots.
     */
    data: XOR<PlotUpdateManyMutationInput, PlotUncheckedUpdateManyInput>
    /**
     * Filter which Plots to update
     */
    where?: PlotWhereInput
    /**
     * Limit how many Plots to update.
     */
    limit?: number
  }

  /**
   * Plot updateManyAndReturn
   */
  export type PlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * The data used to update Plots.
     */
    data: XOR<PlotUpdateManyMutationInput, PlotUncheckedUpdateManyInput>
    /**
     * Filter which Plots to update
     */
    where?: PlotWhereInput
    /**
     * Limit how many Plots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plot upsert
   */
  export type PlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * The filter to search for the Plot to update in case it exists.
     */
    where: PlotWhereUniqueInput
    /**
     * In case the Plot found by the `where` argument doesn't exist, create a new Plot with this data.
     */
    create: XOR<PlotCreateInput, PlotUncheckedCreateInput>
    /**
     * In case the Plot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlotUpdateInput, PlotUncheckedUpdateInput>
  }

  /**
   * Plot delete
   */
  export type PlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
    /**
     * Filter which Plot to delete.
     */
    where: PlotWhereUniqueInput
  }

  /**
   * Plot deleteMany
   */
  export type PlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plots to delete
     */
    where?: PlotWhereInput
    /**
     * Limit how many Plots to delete.
     */
    limit?: number
  }

  /**
   * Plot.seed
   */
  export type Plot$seedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seed
     */
    select?: SeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seed
     */
    omit?: SeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedInclude<ExtArgs> | null
    where?: SeedWhereInput
  }

  /**
   * Plot without action
   */
  export type PlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plot
     */
    select?: PlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plot
     */
    omit?: PlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlotInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    level: 'level',
    experience: 'experience',
    coins: 'coins',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const LevelRequirementScalarFieldEnum: {
    id: 'id',
    level: 'level',
    xpRequired: 'xpRequired'
  };

  export type LevelRequirementScalarFieldEnum = (typeof LevelRequirementScalarFieldEnum)[keyof typeof LevelRequirementScalarFieldEnum]


  export const SeedScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    texture: 'texture',
    growTime: 'growTime',
    xp: 'xp',
    buyPrice: 'buyPrice',
    sellPrice: 'sellPrice'
  };

  export type SeedScalarFieldEnum = (typeof SeedScalarFieldEnum)[keyof typeof SeedScalarFieldEnum]


  export const PlotScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    seedId: 'seedId',
    plantedAt: 'plantedAt',
    isReady: 'isReady'
  };

  export type PlotScalarFieldEnum = (typeof PlotScalarFieldEnum)[keyof typeof PlotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    Character?: CharacterOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: IntFilter<"Character"> | number
    userId?: IntFilter<"Character"> | number
    gender?: EnumGenderNullableFilter<"Character"> | $Enums.Gender | null
    level?: IntFilter<"Character"> | number
    experience?: IntFilter<"Character"> | number
    coins?: IntFilter<"Character"> | number
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plots?: PlotListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plots?: PlotOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    gender?: EnumGenderNullableFilter<"Character"> | $Enums.Gender | null
    level?: IntFilter<"Character"> | number
    experience?: IntFilter<"Character"> | number
    coins?: IntFilter<"Character"> | number
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plots?: PlotListRelationFilter
  }, "id" | "userId">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Character"> | number
    userId?: IntWithAggregatesFilter<"Character"> | number
    gender?: EnumGenderNullableWithAggregatesFilter<"Character"> | $Enums.Gender | null
    level?: IntWithAggregatesFilter<"Character"> | number
    experience?: IntWithAggregatesFilter<"Character"> | number
    coins?: IntWithAggregatesFilter<"Character"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type LevelRequirementWhereInput = {
    AND?: LevelRequirementWhereInput | LevelRequirementWhereInput[]
    OR?: LevelRequirementWhereInput[]
    NOT?: LevelRequirementWhereInput | LevelRequirementWhereInput[]
    id?: IntFilter<"LevelRequirement"> | number
    level?: IntFilter<"LevelRequirement"> | number
    xpRequired?: IntFilter<"LevelRequirement"> | number
  }

  export type LevelRequirementOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type LevelRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    level?: number
    AND?: LevelRequirementWhereInput | LevelRequirementWhereInput[]
    OR?: LevelRequirementWhereInput[]
    NOT?: LevelRequirementWhereInput | LevelRequirementWhereInput[]
    xpRequired?: IntFilter<"LevelRequirement"> | number
  }, "id" | "level">

  export type LevelRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
    _count?: LevelRequirementCountOrderByAggregateInput
    _avg?: LevelRequirementAvgOrderByAggregateInput
    _max?: LevelRequirementMaxOrderByAggregateInput
    _min?: LevelRequirementMinOrderByAggregateInput
    _sum?: LevelRequirementSumOrderByAggregateInput
  }

  export type LevelRequirementScalarWhereWithAggregatesInput = {
    AND?: LevelRequirementScalarWhereWithAggregatesInput | LevelRequirementScalarWhereWithAggregatesInput[]
    OR?: LevelRequirementScalarWhereWithAggregatesInput[]
    NOT?: LevelRequirementScalarWhereWithAggregatesInput | LevelRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LevelRequirement"> | number
    level?: IntWithAggregatesFilter<"LevelRequirement"> | number
    xpRequired?: IntWithAggregatesFilter<"LevelRequirement"> | number
  }

  export type SeedWhereInput = {
    AND?: SeedWhereInput | SeedWhereInput[]
    OR?: SeedWhereInput[]
    NOT?: SeedWhereInput | SeedWhereInput[]
    id?: IntFilter<"Seed"> | number
    key?: StringFilter<"Seed"> | string
    name?: StringFilter<"Seed"> | string
    texture?: StringFilter<"Seed"> | string
    growTime?: IntFilter<"Seed"> | number
    xp?: IntFilter<"Seed"> | number
    buyPrice?: IntFilter<"Seed"> | number
    sellPrice?: IntFilter<"Seed"> | number
    Plot?: PlotListRelationFilter
  }

  export type SeedOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    texture?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    Plot?: PlotOrderByRelationAggregateInput
  }

  export type SeedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: SeedWhereInput | SeedWhereInput[]
    OR?: SeedWhereInput[]
    NOT?: SeedWhereInput | SeedWhereInput[]
    name?: StringFilter<"Seed"> | string
    texture?: StringFilter<"Seed"> | string
    growTime?: IntFilter<"Seed"> | number
    xp?: IntFilter<"Seed"> | number
    buyPrice?: IntFilter<"Seed"> | number
    sellPrice?: IntFilter<"Seed"> | number
    Plot?: PlotListRelationFilter
  }, "id" | "key">

  export type SeedOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    texture?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    _count?: SeedCountOrderByAggregateInput
    _avg?: SeedAvgOrderByAggregateInput
    _max?: SeedMaxOrderByAggregateInput
    _min?: SeedMinOrderByAggregateInput
    _sum?: SeedSumOrderByAggregateInput
  }

  export type SeedScalarWhereWithAggregatesInput = {
    AND?: SeedScalarWhereWithAggregatesInput | SeedScalarWhereWithAggregatesInput[]
    OR?: SeedScalarWhereWithAggregatesInput[]
    NOT?: SeedScalarWhereWithAggregatesInput | SeedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seed"> | number
    key?: StringWithAggregatesFilter<"Seed"> | string
    name?: StringWithAggregatesFilter<"Seed"> | string
    texture?: StringWithAggregatesFilter<"Seed"> | string
    growTime?: IntWithAggregatesFilter<"Seed"> | number
    xp?: IntWithAggregatesFilter<"Seed"> | number
    buyPrice?: IntWithAggregatesFilter<"Seed"> | number
    sellPrice?: IntWithAggregatesFilter<"Seed"> | number
  }

  export type PlotWhereInput = {
    AND?: PlotWhereInput | PlotWhereInput[]
    OR?: PlotWhereInput[]
    NOT?: PlotWhereInput | PlotWhereInput[]
    id?: IntFilter<"Plot"> | number
    characterId?: IntFilter<"Plot"> | number
    seedId?: IntNullableFilter<"Plot"> | number | null
    plantedAt?: DateTimeNullableFilter<"Plot"> | Date | string | null
    isReady?: BoolFilter<"Plot"> | boolean
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    seed?: XOR<SeedNullableScalarRelationFilter, SeedWhereInput> | null
  }

  export type PlotOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrderInput | SortOrder
    plantedAt?: SortOrderInput | SortOrder
    isReady?: SortOrder
    character?: CharacterOrderByWithRelationInput
    seed?: SeedOrderByWithRelationInput
  }

  export type PlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlotWhereInput | PlotWhereInput[]
    OR?: PlotWhereInput[]
    NOT?: PlotWhereInput | PlotWhereInput[]
    characterId?: IntFilter<"Plot"> | number
    seedId?: IntNullableFilter<"Plot"> | number | null
    plantedAt?: DateTimeNullableFilter<"Plot"> | Date | string | null
    isReady?: BoolFilter<"Plot"> | boolean
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    seed?: XOR<SeedNullableScalarRelationFilter, SeedWhereInput> | null
  }, "id">

  export type PlotOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrderInput | SortOrder
    plantedAt?: SortOrderInput | SortOrder
    isReady?: SortOrder
    _count?: PlotCountOrderByAggregateInput
    _avg?: PlotAvgOrderByAggregateInput
    _max?: PlotMaxOrderByAggregateInput
    _min?: PlotMinOrderByAggregateInput
    _sum?: PlotSumOrderByAggregateInput
  }

  export type PlotScalarWhereWithAggregatesInput = {
    AND?: PlotScalarWhereWithAggregatesInput | PlotScalarWhereWithAggregatesInput[]
    OR?: PlotScalarWhereWithAggregatesInput[]
    NOT?: PlotScalarWhereWithAggregatesInput | PlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plot"> | number
    characterId?: IntWithAggregatesFilter<"Plot"> | number
    seedId?: IntNullableWithAggregatesFilter<"Plot"> | number | null
    plantedAt?: DateTimeNullableWithAggregatesFilter<"Plot"> | Date | string | null
    isReady?: BoolWithAggregatesFilter<"Plot"> | boolean
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    Character?: CharacterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    Character?: CharacterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharacterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharacterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateInput = {
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCharacterInput
    plots?: PlotCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: number
    userId: number
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plots?: PlotUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCharacterNestedInput
    plots?: PlotUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plots?: PlotUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: number
    userId: number
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRequirementCreateInput = {
    level: number
    xpRequired: number
  }

  export type LevelRequirementUncheckedCreateInput = {
    id?: number
    level: number
    xpRequired: number
  }

  export type LevelRequirementUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    xpRequired?: IntFieldUpdateOperationsInput | number
  }

  export type LevelRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xpRequired?: IntFieldUpdateOperationsInput | number
  }

  export type LevelRequirementCreateManyInput = {
    id?: number
    level: number
    xpRequired: number
  }

  export type LevelRequirementUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    xpRequired?: IntFieldUpdateOperationsInput | number
  }

  export type LevelRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xpRequired?: IntFieldUpdateOperationsInput | number
  }

  export type SeedCreateInput = {
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice?: number
    sellPrice?: number
    Plot?: PlotCreateNestedManyWithoutSeedInput
  }

  export type SeedUncheckedCreateInput = {
    id?: number
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice?: number
    sellPrice?: number
    Plot?: PlotUncheckedCreateNestedManyWithoutSeedInput
  }

  export type SeedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    Plot?: PlotUpdateManyWithoutSeedNestedInput
  }

  export type SeedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    Plot?: PlotUncheckedUpdateManyWithoutSeedNestedInput
  }

  export type SeedCreateManyInput = {
    id?: number
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice?: number
    sellPrice?: number
  }

  export type SeedUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
  }

  export type SeedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PlotCreateInput = {
    plantedAt?: Date | string | null
    isReady?: boolean
    character: CharacterCreateNestedOneWithoutPlotsInput
    seed?: SeedCreateNestedOneWithoutPlotInput
  }

  export type PlotUncheckedCreateInput = {
    id?: number
    characterId: number
    seedId?: number | null
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotUpdateInput = {
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
    character?: CharacterUpdateOneRequiredWithoutPlotsNestedInput
    seed?: SeedUpdateOneWithoutPlotNestedInput
  }

  export type PlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    seedId?: NullableIntFieldUpdateOperationsInput | number | null
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlotCreateManyInput = {
    id?: number
    characterId: number
    seedId?: number | null
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotUpdateManyMutationInput = {
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    seedId?: NullableIntFieldUpdateOperationsInput | number | null
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlotListRelationFilter = {
    every?: PlotWhereInput
    some?: PlotWhereInput
    none?: PlotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type LevelRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type LevelRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type LevelRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type LevelRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type LevelRequirementSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xpRequired?: SortOrder
  }

  export type SeedCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    texture?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type SeedAvgOrderByAggregateInput = {
    id?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type SeedMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    texture?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type SeedMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    texture?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type SeedSumOrderByAggregateInput = {
    id?: SortOrder
    growTime?: SortOrder
    xp?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type SeedNullableScalarRelationFilter = {
    is?: SeedWhereInput | null
    isNot?: SeedWhereInput | null
  }

  export type PlotCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrder
    plantedAt?: SortOrder
    isReady?: SortOrder
  }

  export type PlotAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrder
  }

  export type PlotMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrder
    plantedAt?: SortOrder
    isReady?: SortOrder
  }

  export type PlotMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrder
    plantedAt?: SortOrder
    isReady?: SortOrder
  }

  export type PlotSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    seedId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CharacterCreateNestedOneWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput
    connect?: CharacterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CharacterUpdateOneWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput
    upsert?: CharacterUpsertWithoutUserInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutUserInput, CharacterUpdateWithoutUserInput>, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput
    upsert?: CharacterUpsertWithoutUserInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutUserInput, CharacterUpdateWithoutUserInput>, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCharacterInput = {
    create?: XOR<UserCreateWithoutCharacterInput, UserUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharacterInput
    connect?: UserWhereUniqueInput
  }

  export type PlotCreateNestedManyWithoutCharacterInput = {
    create?: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput> | PlotCreateWithoutCharacterInput[] | PlotUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutCharacterInput | PlotCreateOrConnectWithoutCharacterInput[]
    createMany?: PlotCreateManyCharacterInputEnvelope
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
  }

  export type PlotUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput> | PlotCreateWithoutCharacterInput[] | PlotUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutCharacterInput | PlotCreateOrConnectWithoutCharacterInput[]
    createMany?: PlotCreateManyCharacterInputEnvelope
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type UserUpdateOneRequiredWithoutCharacterNestedInput = {
    create?: XOR<UserCreateWithoutCharacterInput, UserUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharacterInput
    upsert?: UserUpsertWithoutCharacterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCharacterInput, UserUpdateWithoutCharacterInput>, UserUncheckedUpdateWithoutCharacterInput>
  }

  export type PlotUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput> | PlotCreateWithoutCharacterInput[] | PlotUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutCharacterInput | PlotCreateOrConnectWithoutCharacterInput[]
    upsert?: PlotUpsertWithWhereUniqueWithoutCharacterInput | PlotUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: PlotCreateManyCharacterInputEnvelope
    set?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    disconnect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    delete?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    update?: PlotUpdateWithWhereUniqueWithoutCharacterInput | PlotUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: PlotUpdateManyWithWhereWithoutCharacterInput | PlotUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: PlotScalarWhereInput | PlotScalarWhereInput[]
  }

  export type PlotUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput> | PlotCreateWithoutCharacterInput[] | PlotUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutCharacterInput | PlotCreateOrConnectWithoutCharacterInput[]
    upsert?: PlotUpsertWithWhereUniqueWithoutCharacterInput | PlotUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: PlotCreateManyCharacterInputEnvelope
    set?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    disconnect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    delete?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    update?: PlotUpdateWithWhereUniqueWithoutCharacterInput | PlotUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: PlotUpdateManyWithWhereWithoutCharacterInput | PlotUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: PlotScalarWhereInput | PlotScalarWhereInput[]
  }

  export type PlotCreateNestedManyWithoutSeedInput = {
    create?: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput> | PlotCreateWithoutSeedInput[] | PlotUncheckedCreateWithoutSeedInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutSeedInput | PlotCreateOrConnectWithoutSeedInput[]
    createMany?: PlotCreateManySeedInputEnvelope
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
  }

  export type PlotUncheckedCreateNestedManyWithoutSeedInput = {
    create?: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput> | PlotCreateWithoutSeedInput[] | PlotUncheckedCreateWithoutSeedInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutSeedInput | PlotCreateOrConnectWithoutSeedInput[]
    createMany?: PlotCreateManySeedInputEnvelope
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
  }

  export type PlotUpdateManyWithoutSeedNestedInput = {
    create?: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput> | PlotCreateWithoutSeedInput[] | PlotUncheckedCreateWithoutSeedInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutSeedInput | PlotCreateOrConnectWithoutSeedInput[]
    upsert?: PlotUpsertWithWhereUniqueWithoutSeedInput | PlotUpsertWithWhereUniqueWithoutSeedInput[]
    createMany?: PlotCreateManySeedInputEnvelope
    set?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    disconnect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    delete?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    update?: PlotUpdateWithWhereUniqueWithoutSeedInput | PlotUpdateWithWhereUniqueWithoutSeedInput[]
    updateMany?: PlotUpdateManyWithWhereWithoutSeedInput | PlotUpdateManyWithWhereWithoutSeedInput[]
    deleteMany?: PlotScalarWhereInput | PlotScalarWhereInput[]
  }

  export type PlotUncheckedUpdateManyWithoutSeedNestedInput = {
    create?: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput> | PlotCreateWithoutSeedInput[] | PlotUncheckedCreateWithoutSeedInput[]
    connectOrCreate?: PlotCreateOrConnectWithoutSeedInput | PlotCreateOrConnectWithoutSeedInput[]
    upsert?: PlotUpsertWithWhereUniqueWithoutSeedInput | PlotUpsertWithWhereUniqueWithoutSeedInput[]
    createMany?: PlotCreateManySeedInputEnvelope
    set?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    disconnect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    delete?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    connect?: PlotWhereUniqueInput | PlotWhereUniqueInput[]
    update?: PlotUpdateWithWhereUniqueWithoutSeedInput | PlotUpdateWithWhereUniqueWithoutSeedInput[]
    updateMany?: PlotUpdateManyWithWhereWithoutSeedInput | PlotUpdateManyWithWhereWithoutSeedInput[]
    deleteMany?: PlotScalarWhereInput | PlotScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutPlotsInput = {
    create?: XOR<CharacterCreateWithoutPlotsInput, CharacterUncheckedCreateWithoutPlotsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPlotsInput
    connect?: CharacterWhereUniqueInput
  }

  export type SeedCreateNestedOneWithoutPlotInput = {
    create?: XOR<SeedCreateWithoutPlotInput, SeedUncheckedCreateWithoutPlotInput>
    connectOrCreate?: SeedCreateOrConnectWithoutPlotInput
    connect?: SeedWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CharacterUpdateOneRequiredWithoutPlotsNestedInput = {
    create?: XOR<CharacterCreateWithoutPlotsInput, CharacterUncheckedCreateWithoutPlotsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPlotsInput
    upsert?: CharacterUpsertWithoutPlotsInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutPlotsInput, CharacterUpdateWithoutPlotsInput>, CharacterUncheckedUpdateWithoutPlotsInput>
  }

  export type SeedUpdateOneWithoutPlotNestedInput = {
    create?: XOR<SeedCreateWithoutPlotInput, SeedUncheckedCreateWithoutPlotInput>
    connectOrCreate?: SeedCreateOrConnectWithoutPlotInput
    upsert?: SeedUpsertWithoutPlotInput
    disconnect?: SeedWhereInput | boolean
    delete?: SeedWhereInput | boolean
    connect?: SeedWhereUniqueInput
    update?: XOR<XOR<SeedUpdateToOneWithWhereWithoutPlotInput, SeedUpdateWithoutPlotInput>, SeedUncheckedUpdateWithoutPlotInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CharacterCreateWithoutUserInput = {
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plots?: PlotCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutUserInput = {
    id?: number
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plots?: PlotUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutUserInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterUpsertWithoutUserInput = {
    update: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutUserInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type CharacterUpdateWithoutUserInput = {
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plots?: PlotUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plots?: PlotUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type UserCreateWithoutCharacterInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCharacterInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCharacterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCharacterInput, UserUncheckedCreateWithoutCharacterInput>
  }

  export type PlotCreateWithoutCharacterInput = {
    plantedAt?: Date | string | null
    isReady?: boolean
    seed?: SeedCreateNestedOneWithoutPlotInput
  }

  export type PlotUncheckedCreateWithoutCharacterInput = {
    id?: number
    seedId?: number | null
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotCreateOrConnectWithoutCharacterInput = {
    where: PlotWhereUniqueInput
    create: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput>
  }

  export type PlotCreateManyCharacterInputEnvelope = {
    data: PlotCreateManyCharacterInput | PlotCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCharacterInput = {
    update: XOR<UserUpdateWithoutCharacterInput, UserUncheckedUpdateWithoutCharacterInput>
    create: XOR<UserCreateWithoutCharacterInput, UserUncheckedCreateWithoutCharacterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCharacterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCharacterInput, UserUncheckedUpdateWithoutCharacterInput>
  }

  export type UserUpdateWithoutCharacterInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlotUpsertWithWhereUniqueWithoutCharacterInput = {
    where: PlotWhereUniqueInput
    update: XOR<PlotUpdateWithoutCharacterInput, PlotUncheckedUpdateWithoutCharacterInput>
    create: XOR<PlotCreateWithoutCharacterInput, PlotUncheckedCreateWithoutCharacterInput>
  }

  export type PlotUpdateWithWhereUniqueWithoutCharacterInput = {
    where: PlotWhereUniqueInput
    data: XOR<PlotUpdateWithoutCharacterInput, PlotUncheckedUpdateWithoutCharacterInput>
  }

  export type PlotUpdateManyWithWhereWithoutCharacterInput = {
    where: PlotScalarWhereInput
    data: XOR<PlotUpdateManyMutationInput, PlotUncheckedUpdateManyWithoutCharacterInput>
  }

  export type PlotScalarWhereInput = {
    AND?: PlotScalarWhereInput | PlotScalarWhereInput[]
    OR?: PlotScalarWhereInput[]
    NOT?: PlotScalarWhereInput | PlotScalarWhereInput[]
    id?: IntFilter<"Plot"> | number
    characterId?: IntFilter<"Plot"> | number
    seedId?: IntNullableFilter<"Plot"> | number | null
    plantedAt?: DateTimeNullableFilter<"Plot"> | Date | string | null
    isReady?: BoolFilter<"Plot"> | boolean
  }

  export type PlotCreateWithoutSeedInput = {
    plantedAt?: Date | string | null
    isReady?: boolean
    character: CharacterCreateNestedOneWithoutPlotsInput
  }

  export type PlotUncheckedCreateWithoutSeedInput = {
    id?: number
    characterId: number
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotCreateOrConnectWithoutSeedInput = {
    where: PlotWhereUniqueInput
    create: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput>
  }

  export type PlotCreateManySeedInputEnvelope = {
    data: PlotCreateManySeedInput | PlotCreateManySeedInput[]
    skipDuplicates?: boolean
  }

  export type PlotUpsertWithWhereUniqueWithoutSeedInput = {
    where: PlotWhereUniqueInput
    update: XOR<PlotUpdateWithoutSeedInput, PlotUncheckedUpdateWithoutSeedInput>
    create: XOR<PlotCreateWithoutSeedInput, PlotUncheckedCreateWithoutSeedInput>
  }

  export type PlotUpdateWithWhereUniqueWithoutSeedInput = {
    where: PlotWhereUniqueInput
    data: XOR<PlotUpdateWithoutSeedInput, PlotUncheckedUpdateWithoutSeedInput>
  }

  export type PlotUpdateManyWithWhereWithoutSeedInput = {
    where: PlotScalarWhereInput
    data: XOR<PlotUpdateManyMutationInput, PlotUncheckedUpdateManyWithoutSeedInput>
  }

  export type CharacterCreateWithoutPlotsInput = {
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutPlotsInput = {
    id?: number
    userId: number
    gender?: $Enums.Gender | null
    level?: number
    experience?: number
    coins?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCreateOrConnectWithoutPlotsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutPlotsInput, CharacterUncheckedCreateWithoutPlotsInput>
  }

  export type SeedCreateWithoutPlotInput = {
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice?: number
    sellPrice?: number
  }

  export type SeedUncheckedCreateWithoutPlotInput = {
    id?: number
    key: string
    name: string
    texture: string
    growTime: number
    xp: number
    buyPrice?: number
    sellPrice?: number
  }

  export type SeedCreateOrConnectWithoutPlotInput = {
    where: SeedWhereUniqueInput
    create: XOR<SeedCreateWithoutPlotInput, SeedUncheckedCreateWithoutPlotInput>
  }

  export type CharacterUpsertWithoutPlotsInput = {
    update: XOR<CharacterUpdateWithoutPlotsInput, CharacterUncheckedUpdateWithoutPlotsInput>
    create: XOR<CharacterCreateWithoutPlotsInput, CharacterUncheckedCreateWithoutPlotsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutPlotsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutPlotsInput, CharacterUncheckedUpdateWithoutPlotsInput>
  }

  export type CharacterUpdateWithoutPlotsInput = {
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutPlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedUpsertWithoutPlotInput = {
    update: XOR<SeedUpdateWithoutPlotInput, SeedUncheckedUpdateWithoutPlotInput>
    create: XOR<SeedCreateWithoutPlotInput, SeedUncheckedCreateWithoutPlotInput>
    where?: SeedWhereInput
  }

  export type SeedUpdateToOneWithWhereWithoutPlotInput = {
    where?: SeedWhereInput
    data: XOR<SeedUpdateWithoutPlotInput, SeedUncheckedUpdateWithoutPlotInput>
  }

  export type SeedUpdateWithoutPlotInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
  }

  export type SeedUncheckedUpdateWithoutPlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    texture?: StringFieldUpdateOperationsInput | string
    growTime?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PlotCreateManyCharacterInput = {
    id?: number
    seedId?: number | null
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotUpdateWithoutCharacterInput = {
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
    seed?: SeedUpdateOneWithoutPlotNestedInput
  }

  export type PlotUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    seedId?: NullableIntFieldUpdateOperationsInput | number | null
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlotUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    seedId?: NullableIntFieldUpdateOperationsInput | number | null
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlotCreateManySeedInput = {
    id?: number
    characterId: number
    plantedAt?: Date | string | null
    isReady?: boolean
  }

  export type PlotUpdateWithoutSeedInput = {
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
    character?: CharacterUpdateOneRequiredWithoutPlotsNestedInput
  }

  export type PlotUncheckedUpdateWithoutSeedInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlotUncheckedUpdateManyWithoutSeedInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    plantedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReady?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}