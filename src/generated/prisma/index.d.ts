/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model NormalProductCategory
 *
 */
export type NormalProductCategory =
  $Result.DefaultSelection<Prisma.$NormalProductCategoryPayload>;
/**
 * Model NormalProduct
 *
 */
export type NormalProduct =
  $Result.DefaultSelection<Prisma.$NormalProductPayload>;
/**
 * Model CourseCategory
 *
 */
export type CourseCategory =
  $Result.DefaultSelection<Prisma.$CourseCategoryPayload>;
/**
 * Model Course
 *
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: 'ADMIN';
    USER: 'USER';
  };

  export type Role = (typeof Role)[keyof typeof Role];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

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
   * `prisma.normalProductCategory`: Exposes CRUD operations for the **NormalProductCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more NormalProductCategories
   * const normalProductCategories = await prisma.normalProductCategory.findMany()
   * ```
   */
  get normalProductCategory(): Prisma.NormalProductCategoryDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.normalProduct`: Exposes CRUD operations for the **NormalProduct** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more NormalProducts
   * const normalProducts = await prisma.normalProduct.findMany()
   * ```
   */
  get normalProduct(): Prisma.NormalProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseCategory`: Exposes CRUD operations for the **CourseCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CourseCategories
   * const courseCategories = await prisma.courseCategory.findMany()
   * ```
   */
  get courseCategory(): Prisma.CourseCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    NormalProductCategory: 'NormalProductCategory';
    NormalProduct: 'NormalProduct';
    CourseCategory: 'CourseCategory';
    Course: 'Course';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'normalProductCategory'
        | 'normalProduct'
        | 'courseCategory'
        | 'course';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      NormalProductCategory: {
        payload: Prisma.$NormalProductCategoryPayload<ExtArgs>;
        fields: Prisma.NormalProductCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NormalProductCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NormalProductCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          findFirst: {
            args: Prisma.NormalProductCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NormalProductCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          findMany: {
            args: Prisma.NormalProductCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[];
          };
          create: {
            args: Prisma.NormalProductCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          createMany: {
            args: Prisma.NormalProductCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NormalProductCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[];
          };
          delete: {
            args: Prisma.NormalProductCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          update: {
            args: Prisma.NormalProductCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.NormalProductCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NormalProductCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NormalProductCategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[];
          };
          upsert: {
            args: Prisma.NormalProductCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>;
          };
          aggregate: {
            args: Prisma.NormalProductCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNormalProductCategory>;
          };
          groupBy: {
            args: Prisma.NormalProductCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NormalProductCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.NormalProductCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NormalProductCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      NormalProduct: {
        payload: Prisma.$NormalProductPayload<ExtArgs>;
        fields: Prisma.NormalProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NormalProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NormalProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          findFirst: {
            args: Prisma.NormalProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NormalProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          findMany: {
            args: Prisma.NormalProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[];
          };
          create: {
            args: Prisma.NormalProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          createMany: {
            args: Prisma.NormalProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NormalProductCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[];
          };
          delete: {
            args: Prisma.NormalProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          update: {
            args: Prisma.NormalProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          deleteMany: {
            args: Prisma.NormalProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NormalProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NormalProductUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[];
          };
          upsert: {
            args: Prisma.NormalProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>;
          };
          aggregate: {
            args: Prisma.NormalProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNormalProduct>;
          };
          groupBy: {
            args: Prisma.NormalProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NormalProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.NormalProductCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NormalProductCountAggregateOutputType>
              | number;
          };
        };
      };
      CourseCategory: {
        payload: Prisma.$CourseCategoryPayload<ExtArgs>;
        fields: Prisma.CourseCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CourseCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CourseCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          findFirst: {
            args: Prisma.CourseCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CourseCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          findMany: {
            args: Prisma.CourseCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[];
          };
          create: {
            args: Prisma.CourseCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          createMany: {
            args: Prisma.CourseCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CourseCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[];
          };
          delete: {
            args: Prisma.CourseCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          update: {
            args: Prisma.CourseCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CourseCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CourseCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CourseCategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[];
          };
          upsert: {
            args: Prisma.CourseCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>;
          };
          aggregate: {
            args: Prisma.CourseCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourseCategory>;
          };
          groupBy: {
            args: Prisma.CourseCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CourseCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CourseCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>;
        fields: Prisma.CourseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    normalProductCategory?: NormalProductCategoryOmit;
    normalProduct?: NormalProductOmit;
    courseCategory?: CourseCategoryOmit;
    course?: CourseOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type NormalProductCategoryCountOutputType
   */

  export type NormalProductCategoryCountOutputType = {
    normalProducts: number;
  };

  export type NormalProductCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    normalProducts?:
      | boolean
      | NormalProductCategoryCountOutputTypeCountNormalProductsArgs;
  };

  // Custom InputTypes
  /**
   * NormalProductCategoryCountOutputType without action
   */
  export type NormalProductCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategoryCountOutputType
     */
    select?: NormalProductCategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * NormalProductCategoryCountOutputType without action
   */
  export type NormalProductCategoryCountOutputTypeCountNormalProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NormalProductWhereInput;
  };

  /**
   * Count Type CourseCategoryCountOutputType
   */

  export type CourseCategoryCountOutputType = {
    courses: number;
  };

  export type CourseCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    courses?: boolean | CourseCategoryCountOutputTypeCountCoursesArgs;
  };

  // Custom InputTypes
  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategoryCountOutputType
     */
    select?: CourseCategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeCountCoursesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
    age: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
    age: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    age: number | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    age: number | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    age: number;
    createdAt: number;
    roles: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
    age?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
    age?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    age?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    age?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    age?: true;
    createdAt?: true;
    roles?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string | null;
    age: number | null;
    createdAt: Date;
    roles: $Enums.Role[];
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      age?: boolean;
      createdAt?: boolean;
      roles?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      age?: boolean;
      createdAt?: boolean;
      roles?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      age?: boolean;
      createdAt?: boolean;
      roles?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    age?: boolean;
    createdAt?: boolean;
    roles?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password' | 'age' | 'createdAt' | 'roles',
    ExtArgs['result']['user']
  >;

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string | null;
        age: number | null;
        createdAt: Date;
        roles: $Enums.Role[];
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly age: FieldRef<'User', 'Int'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly roles: FieldRef<'User', 'Role[]'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
  };

  /**
   * Model NormalProductCategory
   */

  export type AggregateNormalProductCategory = {
    _count: NormalProductCategoryCountAggregateOutputType | null;
    _min: NormalProductCategoryMinAggregateOutputType | null;
    _max: NormalProductCategoryMaxAggregateOutputType | null;
  };

  export type NormalProductCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NormalProductCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NormalProductCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type NormalProductCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NormalProductCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NormalProductCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type NormalProductCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NormalProductCategory to aggregate.
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?:
      | NormalProductCategoryOrderByWithRelationInput
      | NormalProductCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NormalProductCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NormalProductCategories
     **/
    _count?: true | NormalProductCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NormalProductCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NormalProductCategoryMaxAggregateInputType;
  };

  export type GetNormalProductCategoryAggregateType<
    T extends NormalProductCategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNormalProductCategory]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormalProductCategory[P]>
      : GetScalarType<T[P], AggregateNormalProductCategory[P]>;
  };

  export type NormalProductCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NormalProductCategoryWhereInput;
    orderBy?:
      | NormalProductCategoryOrderByWithAggregationInput
      | NormalProductCategoryOrderByWithAggregationInput[];
    by:
      | NormalProductCategoryScalarFieldEnum[]
      | NormalProductCategoryScalarFieldEnum;
    having?: NormalProductCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NormalProductCategoryCountAggregateInputType | true;
    _min?: NormalProductCategoryMinAggregateInputType;
    _max?: NormalProductCategoryMaxAggregateInputType;
  };

  export type NormalProductCategoryGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: NormalProductCategoryCountAggregateOutputType | null;
    _min: NormalProductCategoryMinAggregateOutputType | null;
    _max: NormalProductCategoryMaxAggregateOutputType | null;
  };

  type GetNormalProductCategoryGroupByPayload<
    T extends NormalProductCategoryGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NormalProductCategoryGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof NormalProductCategoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], NormalProductCategoryGroupByOutputType[P]>
          : GetScalarType<T[P], NormalProductCategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type NormalProductCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      normalProducts?:
        | boolean
        | NormalProductCategory$normalProductsArgs<ExtArgs>;
      _count?:
        | boolean
        | NormalProductCategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['normalProductCategory']
  >;

  export type NormalProductCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['normalProductCategory']
  >;

  export type NormalProductCategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['normalProductCategory']
  >;

  export type NormalProductCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type NormalProductCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['normalProductCategory']
  >;
  export type NormalProductCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    normalProducts?:
      | boolean
      | NormalProductCategory$normalProductsArgs<ExtArgs>;
    _count?: boolean | NormalProductCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type NormalProductCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type NormalProductCategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $NormalProductCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'NormalProductCategory';
    objects: {
      normalProducts: Prisma.$NormalProductPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['normalProductCategory']
    >;
    composites: {};
  };

  type NormalProductCategoryGetPayload<
    S extends boolean | null | undefined | NormalProductCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$NormalProductCategoryPayload, S>;

  type NormalProductCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NormalProductCategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NormalProductCategoryCountAggregateInputType | true;
  };

  export interface NormalProductCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['NormalProductCategory'];
      meta: { name: 'NormalProductCategory' };
    };
    /**
     * Find zero or one NormalProductCategory that matches the filter.
     * @param {NormalProductCategoryFindUniqueArgs} args - Arguments to find a NormalProductCategory
     * @example
     * // Get one NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NormalProductCategoryFindUniqueArgs>(
      args: SelectSubset<T, NormalProductCategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one NormalProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NormalProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a NormalProductCategory
     * @example
     * // Get one NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NormalProductCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<
        T,
        NormalProductCategoryFindUniqueOrThrowArgs<ExtArgs>
      >,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NormalProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryFindFirstArgs} args - Arguments to find a NormalProductCategory
     * @example
     * // Get one NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NormalProductCategoryFindFirstArgs>(
      args?: SelectSubset<T, NormalProductCategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NormalProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryFindFirstOrThrowArgs} args - Arguments to find a NormalProductCategory
     * @example
     * // Get one NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NormalProductCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<
        T,
        NormalProductCategoryFindFirstOrThrowArgs<ExtArgs>
      >,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more NormalProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NormalProductCategories
     * const normalProductCategories = await prisma.normalProductCategory.findMany()
     *
     * // Get first 10 NormalProductCategories
     * const normalProductCategories = await prisma.normalProductCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const normalProductCategoryWithIdOnly = await prisma.normalProductCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NormalProductCategoryFindManyArgs>(
      args?: SelectSubset<T, NormalProductCategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a NormalProductCategory.
     * @param {NormalProductCategoryCreateArgs} args - Arguments to create a NormalProductCategory.
     * @example
     * // Create one NormalProductCategory
     * const NormalProductCategory = await prisma.normalProductCategory.create({
     *   data: {
     *     // ... data to create a NormalProductCategory
     *   }
     * })
     *
     */
    create<T extends NormalProductCategoryCreateArgs>(
      args: SelectSubset<T, NormalProductCategoryCreateArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many NormalProductCategories.
     * @param {NormalProductCategoryCreateManyArgs} args - Arguments to create many NormalProductCategories.
     * @example
     * // Create many NormalProductCategories
     * const normalProductCategory = await prisma.normalProductCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NormalProductCategoryCreateManyArgs>(
      args?: SelectSubset<T, NormalProductCategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many NormalProductCategories and returns the data saved in the database.
     * @param {NormalProductCategoryCreateManyAndReturnArgs} args - Arguments to create many NormalProductCategories.
     * @example
     * // Create many NormalProductCategories
     * const normalProductCategory = await prisma.normalProductCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NormalProductCategories and only return the `id`
     * const normalProductCategoryWithIdOnly = await prisma.normalProductCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NormalProductCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        NormalProductCategoryCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a NormalProductCategory.
     * @param {NormalProductCategoryDeleteArgs} args - Arguments to delete one NormalProductCategory.
     * @example
     * // Delete one NormalProductCategory
     * const NormalProductCategory = await prisma.normalProductCategory.delete({
     *   where: {
     *     // ... filter to delete one NormalProductCategory
     *   }
     * })
     *
     */
    delete<T extends NormalProductCategoryDeleteArgs>(
      args: SelectSubset<T, NormalProductCategoryDeleteArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one NormalProductCategory.
     * @param {NormalProductCategoryUpdateArgs} args - Arguments to update one NormalProductCategory.
     * @example
     * // Update one NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NormalProductCategoryUpdateArgs>(
      args: SelectSubset<T, NormalProductCategoryUpdateArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more NormalProductCategories.
     * @param {NormalProductCategoryDeleteManyArgs} args - Arguments to filter NormalProductCategories to delete.
     * @example
     * // Delete a few NormalProductCategories
     * const { count } = await prisma.normalProductCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NormalProductCategoryDeleteManyArgs>(
      args?: SelectSubset<T, NormalProductCategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NormalProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NormalProductCategories
     * const normalProductCategory = await prisma.normalProductCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NormalProductCategoryUpdateManyArgs>(
      args: SelectSubset<T, NormalProductCategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NormalProductCategories and returns the data updated in the database.
     * @param {NormalProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many NormalProductCategories.
     * @example
     * // Update many NormalProductCategories
     * const normalProductCategory = await prisma.normalProductCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NormalProductCategories and only return the `id`
     * const normalProductCategoryWithIdOnly = await prisma.normalProductCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends NormalProductCategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        NormalProductCategoryUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one NormalProductCategory.
     * @param {NormalProductCategoryUpsertArgs} args - Arguments to update or create a NormalProductCategory.
     * @example
     * // Update or create a NormalProductCategory
     * const normalProductCategory = await prisma.normalProductCategory.upsert({
     *   create: {
     *     // ... data to create a NormalProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NormalProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends NormalProductCategoryUpsertArgs>(
      args: SelectSubset<T, NormalProductCategoryUpsertArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      $Result.GetResult<
        Prisma.$NormalProductCategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of NormalProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryCountArgs} args - Arguments to filter NormalProductCategories to count.
     * @example
     * // Count the number of NormalProductCategories
     * const count = await prisma.normalProductCategory.count({
     *   where: {
     *     // ... the filter for the NormalProductCategories we want to count
     *   }
     * })
     **/
    count<T extends NormalProductCategoryCountArgs>(
      args?: Subset<T, NormalProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              NormalProductCategoryCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a NormalProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NormalProductCategoryAggregateArgs>(
      args: Subset<T, NormalProductCategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetNormalProductCategoryAggregateType<T>>;

    /**
     * Group by NormalProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends NormalProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NormalProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NormalProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<
        T,
        NormalProductCategoryGroupByArgs,
        OrderByArg
      > &
        InputErrors,
    ): {} extends InputErrors
      ? GetNormalProductCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NormalProductCategory model
     */
    readonly fields: NormalProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NormalProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NormalProductCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    normalProducts<
      T extends NormalProductCategory$normalProductsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, NormalProductCategory$normalProductsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NormalProductPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the NormalProductCategory model
   */
  interface NormalProductCategoryFieldRefs {
    readonly id: FieldRef<'NormalProductCategory', 'String'>;
    readonly name: FieldRef<'NormalProductCategory', 'String'>;
    readonly createdAt: FieldRef<'NormalProductCategory', 'DateTime'>;
    readonly updatedAt: FieldRef<'NormalProductCategory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * NormalProductCategory findUnique
   */
  export type NormalProductCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where: NormalProductCategoryWhereUniqueInput;
  };

  /**
   * NormalProductCategory findUniqueOrThrow
   */
  export type NormalProductCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where: NormalProductCategoryWhereUniqueInput;
  };

  /**
   * NormalProductCategory findFirst
   */
  export type NormalProductCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?:
      | NormalProductCategoryOrderByWithRelationInput
      | NormalProductCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NormalProductCategories.
     */
    distinct?:
      | NormalProductCategoryScalarFieldEnum
      | NormalProductCategoryScalarFieldEnum[];
  };

  /**
   * NormalProductCategory findFirstOrThrow
   */
  export type NormalProductCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?:
      | NormalProductCategoryOrderByWithRelationInput
      | NormalProductCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NormalProductCategories.
     */
    distinct?:
      | NormalProductCategoryScalarFieldEnum
      | NormalProductCategoryScalarFieldEnum[];
  };

  /**
   * NormalProductCategory findMany
   */
  export type NormalProductCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProductCategories to fetch.
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?:
      | NormalProductCategoryOrderByWithRelationInput
      | NormalProductCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number;
    distinct?:
      | NormalProductCategoryScalarFieldEnum
      | NormalProductCategoryScalarFieldEnum[];
  };

  /**
   * NormalProductCategory create
   */
  export type NormalProductCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a NormalProductCategory.
     */
    data: XOR<
      NormalProductCategoryCreateInput,
      NormalProductCategoryUncheckedCreateInput
    >;
  };

  /**
   * NormalProductCategory createMany
   */
  export type NormalProductCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many NormalProductCategories.
     */
    data:
      | NormalProductCategoryCreateManyInput
      | NormalProductCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NormalProductCategory createManyAndReturn
   */
  export type NormalProductCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many NormalProductCategories.
     */
    data:
      | NormalProductCategoryCreateManyInput
      | NormalProductCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NormalProductCategory update
   */
  export type NormalProductCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a NormalProductCategory.
     */
    data: XOR<
      NormalProductCategoryUpdateInput,
      NormalProductCategoryUncheckedUpdateInput
    >;
    /**
     * Choose, which NormalProductCategory to update.
     */
    where: NormalProductCategoryWhereUniqueInput;
  };

  /**
   * NormalProductCategory updateMany
   */
  export type NormalProductCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update NormalProductCategories.
     */
    data: XOR<
      NormalProductCategoryUpdateManyMutationInput,
      NormalProductCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which NormalProductCategories to update
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * Limit how many NormalProductCategories to update.
     */
    limit?: number;
  };

  /**
   * NormalProductCategory updateManyAndReturn
   */
  export type NormalProductCategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update NormalProductCategories.
     */
    data: XOR<
      NormalProductCategoryUpdateManyMutationInput,
      NormalProductCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which NormalProductCategories to update
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * Limit how many NormalProductCategories to update.
     */
    limit?: number;
  };

  /**
   * NormalProductCategory upsert
   */
  export type NormalProductCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the NormalProductCategory to update in case it exists.
     */
    where: NormalProductCategoryWhereUniqueInput;
    /**
     * In case the NormalProductCategory found by the `where` argument doesn't exist, create a new NormalProductCategory with this data.
     */
    create: XOR<
      NormalProductCategoryCreateInput,
      NormalProductCategoryUncheckedCreateInput
    >;
    /**
     * In case the NormalProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      NormalProductCategoryUpdateInput,
      NormalProductCategoryUncheckedUpdateInput
    >;
  };

  /**
   * NormalProductCategory delete
   */
  export type NormalProductCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
    /**
     * Filter which NormalProductCategory to delete.
     */
    where: NormalProductCategoryWhereUniqueInput;
  };

  /**
   * NormalProductCategory deleteMany
   */
  export type NormalProductCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NormalProductCategories to delete
     */
    where?: NormalProductCategoryWhereInput;
    /**
     * Limit how many NormalProductCategories to delete.
     */
    limit?: number;
  };

  /**
   * NormalProductCategory.normalProducts
   */
  export type NormalProductCategory$normalProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    where?: NormalProductWhereInput;
    orderBy?:
      | NormalProductOrderByWithRelationInput
      | NormalProductOrderByWithRelationInput[];
    cursor?: NormalProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[];
  };

  /**
   * NormalProductCategory without action
   */
  export type NormalProductCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model NormalProduct
   */

  export type AggregateNormalProduct = {
    _count: NormalProductCountAggregateOutputType | null;
    _avg: NormalProductAvgAggregateOutputType | null;
    _sum: NormalProductSumAggregateOutputType | null;
    _min: NormalProductMinAggregateOutputType | null;
    _max: NormalProductMaxAggregateOutputType | null;
  };

  export type NormalProductAvgAggregateOutputType = {
    price: number | null;
    stock: number | null;
  };

  export type NormalProductSumAggregateOutputType = {
    price: number | null;
    stock: number | null;
  };

  export type NormalProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    stock: number | null;
    imageUrl: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NormalProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    stock: number | null;
    imageUrl: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NormalProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    stock: number;
    imageUrl: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type NormalProductAvgAggregateInputType = {
    price?: true;
    stock?: true;
  };

  export type NormalProductSumAggregateInputType = {
    price?: true;
    stock?: true;
  };

  export type NormalProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    imageUrl?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NormalProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    imageUrl?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NormalProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    imageUrl?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type NormalProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NormalProduct to aggregate.
     */
    where?: NormalProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?:
      | NormalProductOrderByWithRelationInput
      | NormalProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NormalProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NormalProducts
     **/
    _count?: true | NormalProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NormalProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NormalProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NormalProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NormalProductMaxAggregateInputType;
  };

  export type GetNormalProductAggregateType<
    T extends NormalProductAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNormalProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormalProduct[P]>
      : GetScalarType<T[P], AggregateNormalProduct[P]>;
  };

  export type NormalProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NormalProductWhereInput;
    orderBy?:
      | NormalProductOrderByWithAggregationInput
      | NormalProductOrderByWithAggregationInput[];
    by: NormalProductScalarFieldEnum[] | NormalProductScalarFieldEnum;
    having?: NormalProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NormalProductCountAggregateInputType | true;
    _avg?: NormalProductAvgAggregateInputType;
    _sum?: NormalProductSumAggregateInputType;
    _min?: NormalProductMinAggregateInputType;
    _max?: NormalProductMaxAggregateInputType;
  };

  export type NormalProductGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    stock: number;
    imageUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: NormalProductCountAggregateOutputType | null;
    _avg: NormalProductAvgAggregateOutputType | null;
    _sum: NormalProductSumAggregateOutputType | null;
    _min: NormalProductMinAggregateOutputType | null;
    _max: NormalProductMaxAggregateOutputType | null;
  };

  type GetNormalProductGroupByPayload<T extends NormalProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NormalProductGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof NormalProductGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NormalProductGroupByOutputType[P]>
            : GetScalarType<T[P], NormalProductGroupByOutputType[P]>;
        }
      >
    >;

  export type NormalProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      stock?: boolean;
      imageUrl?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['normalProduct']
  >;

  export type NormalProductSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      stock?: boolean;
      imageUrl?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['normalProduct']
  >;

  export type NormalProductSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      stock?: boolean;
      imageUrl?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['normalProduct']
  >;

  export type NormalProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type NormalProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'description'
    | 'price'
    | 'stock'
    | 'imageUrl'
    | 'categoryId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['normalProduct']
  >;
  export type NormalProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
  };
  export type NormalProductIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
  };
  export type NormalProductIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>;
  };

  export type $NormalProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'NormalProduct';
    objects: {
      category: Prisma.$NormalProductCategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['normalProduct']
    >;
    composites: {};
  };

  type NormalProductGetPayload<
    S extends boolean | null | undefined | NormalProductDefaultArgs,
  > = $Result.GetResult<Prisma.$NormalProductPayload, S>;

  type NormalProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NormalProductFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NormalProductCountAggregateInputType | true;
  };

  export interface NormalProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['NormalProduct'];
      meta: { name: 'NormalProduct' };
    };
    /**
     * Find zero or one NormalProduct that matches the filter.
     * @param {NormalProductFindUniqueArgs} args - Arguments to find a NormalProduct
     * @example
     * // Get one NormalProduct
     * const normalProduct = await prisma.normalProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NormalProductFindUniqueArgs>(
      args: SelectSubset<T, NormalProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one NormalProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NormalProductFindUniqueOrThrowArgs} args - Arguments to find a NormalProduct
     * @example
     * // Get one NormalProduct
     * const normalProduct = await prisma.normalProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NormalProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NormalProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NormalProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductFindFirstArgs} args - Arguments to find a NormalProduct
     * @example
     * // Get one NormalProduct
     * const normalProduct = await prisma.normalProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NormalProductFindFirstArgs>(
      args?: SelectSubset<T, NormalProductFindFirstArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NormalProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductFindFirstOrThrowArgs} args - Arguments to find a NormalProduct
     * @example
     * // Get one NormalProduct
     * const normalProduct = await prisma.normalProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NormalProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NormalProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more NormalProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NormalProducts
     * const normalProducts = await prisma.normalProduct.findMany()
     *
     * // Get first 10 NormalProducts
     * const normalProducts = await prisma.normalProduct.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const normalProductWithIdOnly = await prisma.normalProduct.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NormalProductFindManyArgs>(
      args?: SelectSubset<T, NormalProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a NormalProduct.
     * @param {NormalProductCreateArgs} args - Arguments to create a NormalProduct.
     * @example
     * // Create one NormalProduct
     * const NormalProduct = await prisma.normalProduct.create({
     *   data: {
     *     // ... data to create a NormalProduct
     *   }
     * })
     *
     */
    create<T extends NormalProductCreateArgs>(
      args: SelectSubset<T, NormalProductCreateArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many NormalProducts.
     * @param {NormalProductCreateManyArgs} args - Arguments to create many NormalProducts.
     * @example
     * // Create many NormalProducts
     * const normalProduct = await prisma.normalProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NormalProductCreateManyArgs>(
      args?: SelectSubset<T, NormalProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many NormalProducts and returns the data saved in the database.
     * @param {NormalProductCreateManyAndReturnArgs} args - Arguments to create many NormalProducts.
     * @example
     * // Create many NormalProducts
     * const normalProduct = await prisma.normalProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NormalProducts and only return the `id`
     * const normalProductWithIdOnly = await prisma.normalProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NormalProductCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NormalProductCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a NormalProduct.
     * @param {NormalProductDeleteArgs} args - Arguments to delete one NormalProduct.
     * @example
     * // Delete one NormalProduct
     * const NormalProduct = await prisma.normalProduct.delete({
     *   where: {
     *     // ... filter to delete one NormalProduct
     *   }
     * })
     *
     */
    delete<T extends NormalProductDeleteArgs>(
      args: SelectSubset<T, NormalProductDeleteArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one NormalProduct.
     * @param {NormalProductUpdateArgs} args - Arguments to update one NormalProduct.
     * @example
     * // Update one NormalProduct
     * const normalProduct = await prisma.normalProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NormalProductUpdateArgs>(
      args: SelectSubset<T, NormalProductUpdateArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more NormalProducts.
     * @param {NormalProductDeleteManyArgs} args - Arguments to filter NormalProducts to delete.
     * @example
     * // Delete a few NormalProducts
     * const { count } = await prisma.normalProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NormalProductDeleteManyArgs>(
      args?: SelectSubset<T, NormalProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NormalProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NormalProducts
     * const normalProduct = await prisma.normalProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NormalProductUpdateManyArgs>(
      args: SelectSubset<T, NormalProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NormalProducts and returns the data updated in the database.
     * @param {NormalProductUpdateManyAndReturnArgs} args - Arguments to update many NormalProducts.
     * @example
     * // Update many NormalProducts
     * const normalProduct = await prisma.normalProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NormalProducts and only return the `id`
     * const normalProductWithIdOnly = await prisma.normalProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends NormalProductUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NormalProductUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one NormalProduct.
     * @param {NormalProductUpsertArgs} args - Arguments to update or create a NormalProduct.
     * @example
     * // Update or create a NormalProduct
     * const normalProduct = await prisma.normalProduct.upsert({
     *   create: {
     *     // ... data to create a NormalProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NormalProduct we want to update
     *   }
     * })
     */
    upsert<T extends NormalProductUpsertArgs>(
      args: SelectSubset<T, NormalProductUpsertArgs<ExtArgs>>,
    ): Prisma__NormalProductClient<
      $Result.GetResult<
        Prisma.$NormalProductPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of NormalProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductCountArgs} args - Arguments to filter NormalProducts to count.
     * @example
     * // Count the number of NormalProducts
     * const count = await prisma.normalProduct.count({
     *   where: {
     *     // ... the filter for the NormalProducts we want to count
     *   }
     * })
     **/
    count<T extends NormalProductCountArgs>(
      args?: Subset<T, NormalProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NormalProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a NormalProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NormalProductAggregateArgs>(
      args: Subset<T, NormalProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetNormalProductAggregateType<T>>;

    /**
     * Group by NormalProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormalProductGroupByArgs} args - Group by arguments.
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
      T extends NormalProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NormalProductGroupByArgs['orderBy'] }
        : { orderBy?: NormalProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NormalProductGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNormalProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NormalProduct model
     */
    readonly fields: NormalProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NormalProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NormalProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends NormalProductCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, NormalProductCategoryDefaultArgs<ExtArgs>>,
    ): Prisma__NormalProductCategoryClient<
      | $Result.GetResult<
          Prisma.$NormalProductCategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the NormalProduct model
   */
  interface NormalProductFieldRefs {
    readonly id: FieldRef<'NormalProduct', 'String'>;
    readonly name: FieldRef<'NormalProduct', 'String'>;
    readonly description: FieldRef<'NormalProduct', 'String'>;
    readonly price: FieldRef<'NormalProduct', 'Float'>;
    readonly stock: FieldRef<'NormalProduct', 'Int'>;
    readonly imageUrl: FieldRef<'NormalProduct', 'String'>;
    readonly categoryId: FieldRef<'NormalProduct', 'String'>;
    readonly createdAt: FieldRef<'NormalProduct', 'DateTime'>;
    readonly updatedAt: FieldRef<'NormalProduct', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * NormalProduct findUnique
   */
  export type NormalProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProduct to fetch.
     */
    where: NormalProductWhereUniqueInput;
  };

  /**
   * NormalProduct findUniqueOrThrow
   */
  export type NormalProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProduct to fetch.
     */
    where: NormalProductWhereUniqueInput;
  };

  /**
   * NormalProduct findFirst
   */
  export type NormalProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProduct to fetch.
     */
    where?: NormalProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?:
      | NormalProductOrderByWithRelationInput
      | NormalProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NormalProducts.
     */
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[];
  };

  /**
   * NormalProduct findFirstOrThrow
   */
  export type NormalProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProduct to fetch.
     */
    where?: NormalProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?:
      | NormalProductOrderByWithRelationInput
      | NormalProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NormalProducts.
     */
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[];
  };

  /**
   * NormalProduct findMany
   */
  export type NormalProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter, which NormalProducts to fetch.
     */
    where?: NormalProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?:
      | NormalProductOrderByWithRelationInput
      | NormalProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NormalProducts.
     */
    skip?: number;
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[];
  };

  /**
   * NormalProduct create
   */
  export type NormalProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a NormalProduct.
     */
    data: XOR<NormalProductCreateInput, NormalProductUncheckedCreateInput>;
  };

  /**
   * NormalProduct createMany
   */
  export type NormalProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many NormalProducts.
     */
    data: NormalProductCreateManyInput | NormalProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NormalProduct createManyAndReturn
   */
  export type NormalProductCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * The data used to create many NormalProducts.
     */
    data: NormalProductCreateManyInput | NormalProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NormalProduct update
   */
  export type NormalProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a NormalProduct.
     */
    data: XOR<NormalProductUpdateInput, NormalProductUncheckedUpdateInput>;
    /**
     * Choose, which NormalProduct to update.
     */
    where: NormalProductWhereUniqueInput;
  };

  /**
   * NormalProduct updateMany
   */
  export type NormalProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update NormalProducts.
     */
    data: XOR<
      NormalProductUpdateManyMutationInput,
      NormalProductUncheckedUpdateManyInput
    >;
    /**
     * Filter which NormalProducts to update
     */
    where?: NormalProductWhereInput;
    /**
     * Limit how many NormalProducts to update.
     */
    limit?: number;
  };

  /**
   * NormalProduct updateManyAndReturn
   */
  export type NormalProductUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * The data used to update NormalProducts.
     */
    data: XOR<
      NormalProductUpdateManyMutationInput,
      NormalProductUncheckedUpdateManyInput
    >;
    /**
     * Filter which NormalProducts to update
     */
    where?: NormalProductWhereInput;
    /**
     * Limit how many NormalProducts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NormalProduct upsert
   */
  export type NormalProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the NormalProduct to update in case it exists.
     */
    where: NormalProductWhereUniqueInput;
    /**
     * In case the NormalProduct found by the `where` argument doesn't exist, create a new NormalProduct with this data.
     */
    create: XOR<NormalProductCreateInput, NormalProductUncheckedCreateInput>;
    /**
     * In case the NormalProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NormalProductUpdateInput, NormalProductUncheckedUpdateInput>;
  };

  /**
   * NormalProduct delete
   */
  export type NormalProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
    /**
     * Filter which NormalProduct to delete.
     */
    where: NormalProductWhereUniqueInput;
  };

  /**
   * NormalProduct deleteMany
   */
  export type NormalProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NormalProducts to delete
     */
    where?: NormalProductWhereInput;
    /**
     * Limit how many NormalProducts to delete.
     */
    limit?: number;
  };

  /**
   * NormalProduct without action
   */
  export type NormalProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null;
  };

  /**
   * Model CourseCategory
   */

  export type AggregateCourseCategory = {
    _count: CourseCategoryCountAggregateOutputType | null;
    _min: CourseCategoryMinAggregateOutputType | null;
    _max: CourseCategoryMaxAggregateOutputType | null;
  };

  export type CourseCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourseCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourseCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CourseCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourseCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourseCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CourseCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CourseCategory to aggregate.
     */
    where?: CourseCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?:
      | CourseCategoryOrderByWithRelationInput
      | CourseCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CourseCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CourseCategories
     **/
    _count?: true | CourseCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseCategoryMaxAggregateInputType;
  };

  export type GetCourseCategoryAggregateType<
    T extends CourseCategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCourseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseCategory[P]>
      : GetScalarType<T[P], AggregateCourseCategory[P]>;
  };

  export type CourseCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseCategoryWhereInput;
    orderBy?:
      | CourseCategoryOrderByWithAggregationInput
      | CourseCategoryOrderByWithAggregationInput[];
    by: CourseCategoryScalarFieldEnum[] | CourseCategoryScalarFieldEnum;
    having?: CourseCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCategoryCountAggregateInputType | true;
    _min?: CourseCategoryMinAggregateInputType;
    _max?: CourseCategoryMaxAggregateInputType;
  };

  export type CourseCategoryGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCategoryCountAggregateOutputType | null;
    _min: CourseCategoryMinAggregateOutputType | null;
    _max: CourseCategoryMaxAggregateOutputType | null;
  };

  type GetCourseCategoryGroupByPayload<T extends CourseCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CourseCategoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CourseCategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CourseCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      courses?: boolean | CourseCategory$coursesArgs<ExtArgs>;
      _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['courseCategory']
  >;

  export type CourseCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['courseCategory']
  >;

  export type CourseCategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['courseCategory']
  >;

  export type CourseCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CourseCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['courseCategory']
  >;
  export type CourseCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    courses?: boolean | CourseCategory$coursesArgs<ExtArgs>;
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CourseCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CourseCategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CourseCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CourseCategory';
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['courseCategory']
    >;
    composites: {};
  };

  type CourseCategoryGetPayload<
    S extends boolean | null | undefined | CourseCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CourseCategoryPayload, S>;

  type CourseCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CourseCategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CourseCategoryCountAggregateInputType | true;
  };

  export interface CourseCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CourseCategory'];
      meta: { name: 'CourseCategory' };
    };
    /**
     * Find zero or one CourseCategory that matches the filter.
     * @param {CourseCategoryFindUniqueArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseCategoryFindUniqueArgs>(
      args: SelectSubset<T, CourseCategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CourseCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseCategoryFindUniqueOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CourseCategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CourseCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseCategoryFindFirstArgs>(
      args?: SelectSubset<T, CourseCategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CourseCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseCategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CourseCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany()
     *
     * // Get first 10 CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourseCategoryFindManyArgs>(
      args?: SelectSubset<T, CourseCategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CourseCategory.
     * @param {CourseCategoryCreateArgs} args - Arguments to create a CourseCategory.
     * @example
     * // Create one CourseCategory
     * const CourseCategory = await prisma.courseCategory.create({
     *   data: {
     *     // ... data to create a CourseCategory
     *   }
     * })
     *
     */
    create<T extends CourseCategoryCreateArgs>(
      args: SelectSubset<T, CourseCategoryCreateArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CourseCategories.
     * @param {CourseCategoryCreateManyArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseCategoryCreateManyArgs>(
      args?: SelectSubset<T, CourseCategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CourseCategories and returns the data saved in the database.
     * @param {CourseCategoryCreateManyAndReturnArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CourseCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CourseCategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CourseCategory.
     * @param {CourseCategoryDeleteArgs} args - Arguments to delete one CourseCategory.
     * @example
     * // Delete one CourseCategory
     * const CourseCategory = await prisma.courseCategory.delete({
     *   where: {
     *     // ... filter to delete one CourseCategory
     *   }
     * })
     *
     */
    delete<T extends CourseCategoryDeleteArgs>(
      args: SelectSubset<T, CourseCategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CourseCategory.
     * @param {CourseCategoryUpdateArgs} args - Arguments to update one CourseCategory.
     * @example
     * // Update one CourseCategory
     * const courseCategory = await prisma.courseCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseCategoryUpdateArgs>(
      args: SelectSubset<T, CourseCategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CourseCategories.
     * @param {CourseCategoryDeleteManyArgs} args - Arguments to filter CourseCategories to delete.
     * @example
     * // Delete a few CourseCategories
     * const { count } = await prisma.courseCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseCategoryDeleteManyArgs>(
      args?: SelectSubset<T, CourseCategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseCategoryUpdateManyArgs>(
      args: SelectSubset<T, CourseCategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CourseCategories and returns the data updated in the database.
     * @param {CourseCategoryUpdateManyAndReturnArgs} args - Arguments to update many CourseCategories.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseCategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CourseCategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CourseCategory.
     * @param {CourseCategoryUpsertArgs} args - Arguments to update or create a CourseCategory.
     * @example
     * // Update or create a CourseCategory
     * const courseCategory = await prisma.courseCategory.upsert({
     *   create: {
     *     // ... data to create a CourseCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseCategory we want to update
     *   }
     * })
     */
    upsert<T extends CourseCategoryUpsertArgs>(
      args: SelectSubset<T, CourseCategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      $Result.GetResult<
        Prisma.$CourseCategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryCountArgs} args - Arguments to filter CourseCategories to count.
     * @example
     * // Count the number of CourseCategories
     * const count = await prisma.courseCategory.count({
     *   where: {
     *     // ... the filter for the CourseCategories we want to count
     *   }
     * })
     **/
    count<T extends CourseCategoryCountArgs>(
      args?: Subset<T, CourseCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseCategoryAggregateArgs>(
      args: Subset<T, CourseCategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseCategoryAggregateType<T>>;

    /**
     * Group by CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryGroupByArgs} args - Group by arguments.
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
      T extends CourseCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CourseCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CourseCategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCourseCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CourseCategory model
     */
    readonly fields: CourseCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    courses<T extends CourseCategory$coursesArgs<ExtArgs> = {}>(
      args?: Subset<T, CourseCategory$coursesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CoursePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CourseCategory model
   */
  interface CourseCategoryFieldRefs {
    readonly id: FieldRef<'CourseCategory', 'String'>;
    readonly name: FieldRef<'CourseCategory', 'String'>;
    readonly createdAt: FieldRef<'CourseCategory', 'DateTime'>;
    readonly updatedAt: FieldRef<'CourseCategory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CourseCategory findUnique
   */
  export type CourseCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput;
  };

  /**
   * CourseCategory findUniqueOrThrow
   */
  export type CourseCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput;
  };

  /**
   * CourseCategory findFirst
   */
  export type CourseCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?:
      | CourseCategoryOrderByWithRelationInput
      | CourseCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[];
  };

  /**
   * CourseCategory findFirstOrThrow
   */
  export type CourseCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?:
      | CourseCategoryOrderByWithRelationInput
      | CourseCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[];
  };

  /**
   * CourseCategory findMany
   */
  export type CourseCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CourseCategories to fetch.
     */
    where?: CourseCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?:
      | CourseCategoryOrderByWithRelationInput
      | CourseCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseCategories.
     */
    skip?: number;
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[];
  };

  /**
   * CourseCategory create
   */
  export type CourseCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a CourseCategory.
     */
    data: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>;
  };

  /**
   * CourseCategory createMany
   */
  export type CourseCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CourseCategory createManyAndReturn
   */
  export type CourseCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CourseCategory update
   */
  export type CourseCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a CourseCategory.
     */
    data: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>;
    /**
     * Choose, which CourseCategory to update.
     */
    where: CourseCategoryWhereUniqueInput;
  };

  /**
   * CourseCategory updateMany
   */
  export type CourseCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<
      CourseCategoryUpdateManyMutationInput,
      CourseCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput;
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number;
  };

  /**
   * CourseCategory updateManyAndReturn
   */
  export type CourseCategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<
      CourseCategoryUpdateManyMutationInput,
      CourseCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput;
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number;
  };

  /**
   * CourseCategory upsert
   */
  export type CourseCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the CourseCategory to update in case it exists.
     */
    where: CourseCategoryWhereUniqueInput;
    /**
     * In case the CourseCategory found by the `where` argument doesn't exist, create a new CourseCategory with this data.
     */
    create: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>;
    /**
     * In case the CourseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>;
  };

  /**
   * CourseCategory delete
   */
  export type CourseCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
    /**
     * Filter which CourseCategory to delete.
     */
    where: CourseCategoryWhereUniqueInput;
  };

  /**
   * CourseCategory deleteMany
   */
  export type CourseCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CourseCategories to delete
     */
    where?: CourseCategoryWhereInput;
    /**
     * Limit how many CourseCategories to delete.
     */
    limit?: number;
  };

  /**
   * CourseCategory.courses
   */
  export type CourseCategory$coursesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    where?: CourseWhereInput;
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    cursor?: CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * CourseCategory without action
   */
  export type CourseCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseAvgAggregateOutputType = {
    price: number | null;
  };

  export type CourseSumAggregateOutputType = {
    price: number | null;
  };

  export type CourseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CourseAvgAggregateInputType = {
    price?: true;
  };

  export type CourseSumAggregateInputType = {
    price?: true;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type CourseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseWhereInput;
    orderBy?:
      | CourseOrderByWithAggregationInput
      | CourseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CourseGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CourseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>;
        }
      >
    >;

  export type CourseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type CourseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type CourseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type CourseSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CourseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'description'
    | 'price'
    | 'categoryId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['course']
  >;
  export type CourseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
  };
  export type CourseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
  };
  export type CourseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>;
  };

  export type $CoursePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Course';
    objects: {
      category: Prisma.$CourseCategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price: number;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['course']
    >;
    composites: {};
  };

  type CourseGetPayload<
    S extends boolean | null | undefined | CourseDefaultArgs,
  > = $Result.GetResult<Prisma.$CoursePayload, S>;

  type CourseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface CourseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Course'];
      meta: { name: 'Course' };
    };
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourseFindManyArgs>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     */
    create<T extends CourseCreateArgs>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseCreateManyArgs>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     */
    delete<T extends CourseDeleteArgs>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseUpdateArgs>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseDeleteManyArgs>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseUpdateManyArgs>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCourseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Course model
     */
    readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CourseCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourseCategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CourseCategoryClient<
      | $Result.GetResult<
          Prisma.$CourseCategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<'Course', 'String'>;
    readonly name: FieldRef<'Course', 'String'>;
    readonly description: FieldRef<'Course', 'String'>;
    readonly price: FieldRef<'Course', 'Float'>;
    readonly categoryId: FieldRef<'Course', 'String'>;
    readonly createdAt: FieldRef<'Course', 'DateTime'>;
    readonly updatedAt: FieldRef<'Course', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course create
   */
  export type CourseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>;
  };

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Course update
   */
  export type CourseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>;
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
  };

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput;
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>;
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>;
  };

  /**
   * Course delete
   */
  export type CourseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to delete.
     */
    limit?: number;
  };

  /**
   * Course without action
   */
  export type CourseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    age: 'age';
    createdAt: 'createdAt';
    roles: 'roles';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const NormalProductCategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type NormalProductCategoryScalarFieldEnum =
    (typeof NormalProductCategoryScalarFieldEnum)[keyof typeof NormalProductCategoryScalarFieldEnum];

  export const NormalProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    stock: 'stock';
    imageUrl: 'imageUrl';
    categoryId: 'categoryId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type NormalProductScalarFieldEnum =
    (typeof NormalProductScalarFieldEnum)[keyof typeof NormalProductScalarFieldEnum];

  export const CourseCategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CourseCategoryScalarFieldEnum =
    (typeof CourseCategoryScalarFieldEnum)[keyof typeof CourseCategoryScalarFieldEnum];

  export const CourseScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    categoryId: 'categoryId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CourseScalarFieldEnum =
    (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringNullableFilter<'User'> | string | null;
    age?: IntNullableFilter<'User'> | number | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    roles?: EnumRoleNullableListFilter<'User'>;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrderInput | SortOrder;
    age?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    roles?: SortOrder;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringNullableFilter<'User'> | string | null;
      age?: IntNullableFilter<'User'> | number | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      roles?: EnumRoleNullableListFilter<'User'>;
    },
    'id' | 'name' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrderInput | SortOrder;
    age?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    roles?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    name?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringNullableWithAggregatesFilter<'User'> | string | null;
    age?: IntNullableWithAggregatesFilter<'User'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    roles?: EnumRoleNullableListFilter<'User'>;
  };

  export type NormalProductCategoryWhereInput = {
    AND?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[];
    OR?: NormalProductCategoryWhereInput[];
    NOT?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[];
    id?: StringFilter<'NormalProductCategory'> | string;
    name?: StringFilter<'NormalProductCategory'> | string;
    createdAt?: DateTimeFilter<'NormalProductCategory'> | Date | string;
    updatedAt?: DateTimeFilter<'NormalProductCategory'> | Date | string;
    normalProducts?: NormalProductListRelationFilter;
  };

  export type NormalProductCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    normalProducts?: NormalProductOrderByRelationAggregateInput;
  };

  export type NormalProductCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[];
      OR?: NormalProductCategoryWhereInput[];
      NOT?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[];
      name?: StringFilter<'NormalProductCategory'> | string;
      createdAt?: DateTimeFilter<'NormalProductCategory'> | Date | string;
      updatedAt?: DateTimeFilter<'NormalProductCategory'> | Date | string;
      normalProducts?: NormalProductListRelationFilter;
    },
    'id'
  >;

  export type NormalProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: NormalProductCategoryCountOrderByAggregateInput;
    _max?: NormalProductCategoryMaxOrderByAggregateInput;
    _min?: NormalProductCategoryMinOrderByAggregateInput;
  };

  export type NormalProductCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | NormalProductCategoryScalarWhereWithAggregatesInput
      | NormalProductCategoryScalarWhereWithAggregatesInput[];
    OR?: NormalProductCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | NormalProductCategoryScalarWhereWithAggregatesInput
      | NormalProductCategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'NormalProductCategory'> | string;
    name?: StringWithAggregatesFilter<'NormalProductCategory'> | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<'NormalProductCategory'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'NormalProductCategory'>
      | Date
      | string;
  };

  export type NormalProductWhereInput = {
    AND?: NormalProductWhereInput | NormalProductWhereInput[];
    OR?: NormalProductWhereInput[];
    NOT?: NormalProductWhereInput | NormalProductWhereInput[];
    id?: StringFilter<'NormalProduct'> | string;
    name?: StringFilter<'NormalProduct'> | string;
    description?: StringNullableFilter<'NormalProduct'> | string | null;
    price?: FloatFilter<'NormalProduct'> | number;
    stock?: IntFilter<'NormalProduct'> | number;
    imageUrl?: StringNullableFilter<'NormalProduct'> | string | null;
    categoryId?: StringFilter<'NormalProduct'> | string;
    createdAt?: DateTimeFilter<'NormalProduct'> | Date | string;
    updatedAt?: DateTimeFilter<'NormalProduct'> | Date | string;
    category?: XOR<
      NormalProductCategoryScalarRelationFilter,
      NormalProductCategoryWhereInput
    >;
  };

  export type NormalProductOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    stock?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    category?: NormalProductCategoryOrderByWithRelationInput;
  };

  export type NormalProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NormalProductWhereInput | NormalProductWhereInput[];
      OR?: NormalProductWhereInput[];
      NOT?: NormalProductWhereInput | NormalProductWhereInput[];
      name?: StringFilter<'NormalProduct'> | string;
      description?: StringNullableFilter<'NormalProduct'> | string | null;
      price?: FloatFilter<'NormalProduct'> | number;
      stock?: IntFilter<'NormalProduct'> | number;
      imageUrl?: StringNullableFilter<'NormalProduct'> | string | null;
      categoryId?: StringFilter<'NormalProduct'> | string;
      createdAt?: DateTimeFilter<'NormalProduct'> | Date | string;
      updatedAt?: DateTimeFilter<'NormalProduct'> | Date | string;
      category?: XOR<
        NormalProductCategoryScalarRelationFilter,
        NormalProductCategoryWhereInput
      >;
    },
    'id'
  >;

  export type NormalProductOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    stock?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: NormalProductCountOrderByAggregateInput;
    _avg?: NormalProductAvgOrderByAggregateInput;
    _max?: NormalProductMaxOrderByAggregateInput;
    _min?: NormalProductMinOrderByAggregateInput;
    _sum?: NormalProductSumOrderByAggregateInput;
  };

  export type NormalProductScalarWhereWithAggregatesInput = {
    AND?:
      | NormalProductScalarWhereWithAggregatesInput
      | NormalProductScalarWhereWithAggregatesInput[];
    OR?: NormalProductScalarWhereWithAggregatesInput[];
    NOT?:
      | NormalProductScalarWhereWithAggregatesInput
      | NormalProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'NormalProduct'> | string;
    name?: StringWithAggregatesFilter<'NormalProduct'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'NormalProduct'>
      | string
      | null;
    price?: FloatWithAggregatesFilter<'NormalProduct'> | number;
    stock?: IntWithAggregatesFilter<'NormalProduct'> | number;
    imageUrl?:
      | StringNullableWithAggregatesFilter<'NormalProduct'>
      | string
      | null;
    categoryId?: StringWithAggregatesFilter<'NormalProduct'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'NormalProduct'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'NormalProduct'> | Date | string;
  };

  export type CourseCategoryWhereInput = {
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[];
    OR?: CourseCategoryWhereInput[];
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[];
    id?: StringFilter<'CourseCategory'> | string;
    name?: StringFilter<'CourseCategory'> | string;
    createdAt?: DateTimeFilter<'CourseCategory'> | Date | string;
    updatedAt?: DateTimeFilter<'CourseCategory'> | Date | string;
    courses?: CourseListRelationFilter;
  };

  export type CourseCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    courses?: CourseOrderByRelationAggregateInput;
  };

  export type CourseCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[];
      OR?: CourseCategoryWhereInput[];
      NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[];
      name?: StringFilter<'CourseCategory'> | string;
      createdAt?: DateTimeFilter<'CourseCategory'> | Date | string;
      updatedAt?: DateTimeFilter<'CourseCategory'> | Date | string;
      courses?: CourseListRelationFilter;
    },
    'id'
  >;

  export type CourseCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CourseCategoryCountOrderByAggregateInput;
    _max?: CourseCategoryMaxOrderByAggregateInput;
    _min?: CourseCategoryMinOrderByAggregateInput;
  };

  export type CourseCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CourseCategoryScalarWhereWithAggregatesInput
      | CourseCategoryScalarWhereWithAggregatesInput[];
    OR?: CourseCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CourseCategoryScalarWhereWithAggregatesInput
      | CourseCategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CourseCategory'> | string;
    name?: StringWithAggregatesFilter<'CourseCategory'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'CourseCategory'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'CourseCategory'> | Date | string;
  };

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[];
    OR?: CourseWhereInput[];
    NOT?: CourseWhereInput | CourseWhereInput[];
    id?: StringFilter<'Course'> | string;
    name?: StringFilter<'Course'> | string;
    description?: StringNullableFilter<'Course'> | string | null;
    price?: FloatFilter<'Course'> | number;
    categoryId?: StringFilter<'Course'> | string;
    createdAt?: DateTimeFilter<'Course'> | Date | string;
    updatedAt?: DateTimeFilter<'Course'> | Date | string;
    category?: XOR<
      CourseCategoryScalarRelationFilter,
      CourseCategoryWhereInput
    >;
  };

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    category?: CourseCategoryOrderByWithRelationInput;
  };

  export type CourseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CourseWhereInput | CourseWhereInput[];
      OR?: CourseWhereInput[];
      NOT?: CourseWhereInput | CourseWhereInput[];
      name?: StringFilter<'Course'> | string;
      description?: StringNullableFilter<'Course'> | string | null;
      price?: FloatFilter<'Course'> | number;
      categoryId?: StringFilter<'Course'> | string;
      createdAt?: DateTimeFilter<'Course'> | Date | string;
      updatedAt?: DateTimeFilter<'Course'> | Date | string;
      category?: XOR<
        CourseCategoryScalarRelationFilter,
        CourseCategoryWhereInput
      >;
    },
    'id'
  >;

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CourseCountOrderByAggregateInput;
    _avg?: CourseAvgOrderByAggregateInput;
    _max?: CourseMaxOrderByAggregateInput;
    _min?: CourseMinOrderByAggregateInput;
    _sum?: CourseSumOrderByAggregateInput;
  };

  export type CourseScalarWhereWithAggregatesInput = {
    AND?:
      | CourseScalarWhereWithAggregatesInput
      | CourseScalarWhereWithAggregatesInput[];
    OR?: CourseScalarWhereWithAggregatesInput[];
    NOT?:
      | CourseScalarWhereWithAggregatesInput
      | CourseScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Course'> | string;
    name?: StringWithAggregatesFilter<'Course'> | string;
    description?: StringNullableWithAggregatesFilter<'Course'> | string | null;
    price?: FloatWithAggregatesFilter<'Course'> | number;
    categoryId?: StringWithAggregatesFilter<'Course'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Course'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Course'> | Date | string;
  };

  export type UserCreateInput = {
    name: string;
    email: string;
    password?: string | null;
    age?: number | null;
    createdAt?: Date | string;
    roles?: UserCreaterolesInput | $Enums.Role[];
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password?: string | null;
    age?: number | null;
    createdAt?: Date | string;
    roles?: UserCreaterolesInput | $Enums.Role[];
  };

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserUpdaterolesInput | $Enums.Role[];
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserUpdaterolesInput | $Enums.Role[];
  };

  export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password?: string | null;
    age?: number | null;
    createdAt?: Date | string;
    roles?: UserCreaterolesInput | $Enums.Role[];
  };

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserUpdaterolesInput | $Enums.Role[];
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserUpdaterolesInput | $Enums.Role[];
  };

  export type NormalProductCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    normalProducts?: NormalProductCreateNestedManyWithoutCategoryInput;
  };

  export type NormalProductCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    normalProducts?: NormalProductUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type NormalProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    normalProducts?: NormalProductUpdateManyWithoutCategoryNestedInput;
  };

  export type NormalProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    normalProducts?: NormalProductUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type NormalProductCategoryCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: NormalProductCategoryCreateNestedOneWithoutNormalProductsInput;
  };

  export type NormalProductUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput;
  };

  export type NormalProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courses?: CourseCreateNestedManyWithoutCategoryInput;
  };

  export type CourseCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CourseCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    courses?: CourseUpdateManyWithoutCategoryNestedInput;
  };

  export type CourseCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CourseCategoryCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CourseCategoryCreateNestedOneWithoutCoursesInput;
  };

  export type CourseUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput;
  };

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    age?: SortOrder;
    createdAt?: SortOrder;
    roles?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
    age?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    age?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    age?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
    age?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NormalProductListRelationFilter = {
    every?: NormalProductWhereInput;
    some?: NormalProductWhereInput;
    none?: NormalProductWhereInput;
  };

  export type NormalProductOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NormalProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NormalProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NormalProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NormalProductCategoryScalarRelationFilter = {
    is?: NormalProductCategoryWhereInput;
    isNot?: NormalProductCategoryWhereInput;
  };

  export type NormalProductCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    stock?: SortOrder;
    imageUrl?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NormalProductAvgOrderByAggregateInput = {
    price?: SortOrder;
    stock?: SortOrder;
  };

  export type NormalProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    stock?: SortOrder;
    imageUrl?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NormalProductMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    stock?: SortOrder;
    imageUrl?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NormalProductSumOrderByAggregateInput = {
    price?: SortOrder;
    stock?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type CourseListRelationFilter = {
    every?: CourseWhereInput;
    some?: CourseWhereInput;
    none?: CourseWhereInput;
  };

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CourseCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseCategoryScalarRelationFilter = {
    is?: CourseCategoryWhereInput;
    isNot?: CourseCategoryWhereInput;
  };

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type UserCreaterolesInput = {
    set: $Enums.Role[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdaterolesInput = {
    set?: $Enums.Role[];
    push?: $Enums.Role | $Enums.Role[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NormalProductCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          NormalProductCreateWithoutCategoryInput,
          NormalProductUncheckedCreateWithoutCategoryInput
        >
      | NormalProductCreateWithoutCategoryInput[]
      | NormalProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | NormalProductCreateOrConnectWithoutCategoryInput
      | NormalProductCreateOrConnectWithoutCategoryInput[];
    createMany?: NormalProductCreateManyCategoryInputEnvelope;
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
  };

  export type NormalProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          NormalProductCreateWithoutCategoryInput,
          NormalProductUncheckedCreateWithoutCategoryInput
        >
      | NormalProductCreateWithoutCategoryInput[]
      | NormalProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | NormalProductCreateOrConnectWithoutCategoryInput
      | NormalProductCreateOrConnectWithoutCategoryInput[];
    createMany?: NormalProductCreateManyCategoryInputEnvelope;
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
  };

  export type NormalProductUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          NormalProductCreateWithoutCategoryInput,
          NormalProductUncheckedCreateWithoutCategoryInput
        >
      | NormalProductCreateWithoutCategoryInput[]
      | NormalProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | NormalProductCreateOrConnectWithoutCategoryInput
      | NormalProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | NormalProductUpsertWithWhereUniqueWithoutCategoryInput
      | NormalProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: NormalProductCreateManyCategoryInputEnvelope;
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    disconnect?:
      | NormalProductWhereUniqueInput
      | NormalProductWhereUniqueInput[];
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    update?:
      | NormalProductUpdateWithWhereUniqueWithoutCategoryInput
      | NormalProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | NormalProductUpdateManyWithWhereWithoutCategoryInput
      | NormalProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | NormalProductScalarWhereInput
      | NormalProductScalarWhereInput[];
  };

  export type NormalProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          NormalProductCreateWithoutCategoryInput,
          NormalProductUncheckedCreateWithoutCategoryInput
        >
      | NormalProductCreateWithoutCategoryInput[]
      | NormalProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | NormalProductCreateOrConnectWithoutCategoryInput
      | NormalProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | NormalProductUpsertWithWhereUniqueWithoutCategoryInput
      | NormalProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: NormalProductCreateManyCategoryInputEnvelope;
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    disconnect?:
      | NormalProductWhereUniqueInput
      | NormalProductWhereUniqueInput[];
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[];
    update?:
      | NormalProductUpdateWithWhereUniqueWithoutCategoryInput
      | NormalProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | NormalProductUpdateManyWithWhereWithoutCategoryInput
      | NormalProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | NormalProductScalarWhereInput
      | NormalProductScalarWhereInput[];
  };

  export type NormalProductCategoryCreateNestedOneWithoutNormalProductsInput = {
    create?: XOR<
      NormalProductCategoryCreateWithoutNormalProductsInput,
      NormalProductCategoryUncheckedCreateWithoutNormalProductsInput
    >;
    connectOrCreate?: NormalProductCategoryCreateOrConnectWithoutNormalProductsInput;
    connect?: NormalProductCategoryWhereUniqueInput;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput =
    {
      create?: XOR<
        NormalProductCategoryCreateWithoutNormalProductsInput,
        NormalProductCategoryUncheckedCreateWithoutNormalProductsInput
      >;
      connectOrCreate?: NormalProductCategoryCreateOrConnectWithoutNormalProductsInput;
      upsert?: NormalProductCategoryUpsertWithoutNormalProductsInput;
      connect?: NormalProductCategoryWhereUniqueInput;
      update?: XOR<
        XOR<
          NormalProductCategoryUpdateToOneWithWhereWithoutNormalProductsInput,
          NormalProductCategoryUpdateWithoutNormalProductsInput
        >,
        NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput
      >;
    };

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CourseCreateWithoutCategoryInput,
          CourseUncheckedCreateWithoutCategoryInput
        >
      | CourseCreateWithoutCategoryInput[]
      | CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutCategoryInput
      | CourseCreateOrConnectWithoutCategoryInput[];
    createMany?: CourseCreateManyCategoryInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CourseCreateWithoutCategoryInput,
          CourseUncheckedCreateWithoutCategoryInput
        >
      | CourseCreateWithoutCategoryInput[]
      | CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutCategoryInput
      | CourseCreateOrConnectWithoutCategoryInput[];
    createMany?: CourseCreateManyCategoryInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutCategoryInput,
          CourseUncheckedCreateWithoutCategoryInput
        >
      | CourseCreateWithoutCategoryInput[]
      | CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutCategoryInput
      | CourseCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutCategoryInput
      | CourseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CourseCreateManyCategoryInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutCategoryInput
      | CourseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutCategoryInput
      | CourseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutCategoryInput,
          CourseUncheckedCreateWithoutCategoryInput
        >
      | CourseCreateWithoutCategoryInput[]
      | CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutCategoryInput
      | CourseCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutCategoryInput
      | CourseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CourseCreateManyCategoryInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutCategoryInput
      | CourseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutCategoryInput
      | CourseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type CourseCategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<
      CourseCategoryCreateWithoutCoursesInput,
      CourseCategoryUncheckedCreateWithoutCoursesInput
    >;
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput;
    connect?: CourseCategoryWhereUniqueInput;
  };

  export type CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<
      CourseCategoryCreateWithoutCoursesInput,
      CourseCategoryUncheckedCreateWithoutCoursesInput
    >;
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput;
    upsert?: CourseCategoryUpsertWithoutCoursesInput;
    connect?: CourseCategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CourseCategoryUpdateToOneWithWhereWithoutCoursesInput,
        CourseCategoryUpdateWithoutCoursesInput
      >,
      CourseCategoryUncheckedUpdateWithoutCoursesInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NormalProductCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductCreateOrConnectWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput;
    create: XOR<
      NormalProductCreateWithoutCategoryInput,
      NormalProductUncheckedCreateWithoutCategoryInput
    >;
  };

  export type NormalProductCreateManyCategoryInputEnvelope = {
    data:
      | NormalProductCreateManyCategoryInput
      | NormalProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type NormalProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput;
    update: XOR<
      NormalProductUpdateWithoutCategoryInput,
      NormalProductUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      NormalProductCreateWithoutCategoryInput,
      NormalProductUncheckedCreateWithoutCategoryInput
    >;
  };

  export type NormalProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput;
    data: XOR<
      NormalProductUpdateWithoutCategoryInput,
      NormalProductUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type NormalProductUpdateManyWithWhereWithoutCategoryInput = {
    where: NormalProductScalarWhereInput;
    data: XOR<
      NormalProductUpdateManyMutationInput,
      NormalProductUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type NormalProductScalarWhereInput = {
    AND?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[];
    OR?: NormalProductScalarWhereInput[];
    NOT?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[];
    id?: StringFilter<'NormalProduct'> | string;
    name?: StringFilter<'NormalProduct'> | string;
    description?: StringNullableFilter<'NormalProduct'> | string | null;
    price?: FloatFilter<'NormalProduct'> | number;
    stock?: IntFilter<'NormalProduct'> | number;
    imageUrl?: StringNullableFilter<'NormalProduct'> | string | null;
    categoryId?: StringFilter<'NormalProduct'> | string;
    createdAt?: DateTimeFilter<'NormalProduct'> | Date | string;
    updatedAt?: DateTimeFilter<'NormalProduct'> | Date | string;
  };

  export type NormalProductCategoryCreateWithoutNormalProductsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductCategoryUncheckedCreateWithoutNormalProductsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductCategoryCreateOrConnectWithoutNormalProductsInput = {
    where: NormalProductCategoryWhereUniqueInput;
    create: XOR<
      NormalProductCategoryCreateWithoutNormalProductsInput,
      NormalProductCategoryUncheckedCreateWithoutNormalProductsInput
    >;
  };

  export type NormalProductCategoryUpsertWithoutNormalProductsInput = {
    update: XOR<
      NormalProductCategoryUpdateWithoutNormalProductsInput,
      NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput
    >;
    create: XOR<
      NormalProductCategoryCreateWithoutNormalProductsInput,
      NormalProductCategoryUncheckedCreateWithoutNormalProductsInput
    >;
    where?: NormalProductCategoryWhereInput;
  };

  export type NormalProductCategoryUpdateToOneWithWhereWithoutNormalProductsInput =
    {
      where?: NormalProductCategoryWhereInput;
      data: XOR<
        NormalProductCategoryUpdateWithoutNormalProductsInput,
        NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput
      >;
    };

  export type NormalProductCategoryUpdateWithoutNormalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutCategoryInput,
      CourseUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput;
    update: XOR<
      CourseUpdateWithoutCategoryInput,
      CourseUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      CourseCreateWithoutCategoryInput,
      CourseUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput;
    data: XOR<
      CourseUpdateWithoutCategoryInput,
      CourseUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput;
    data: XOR<
      CourseUpdateManyMutationInput,
      CourseUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[];
    OR?: CourseScalarWhereInput[];
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[];
    id?: StringFilter<'Course'> | string;
    name?: StringFilter<'Course'> | string;
    description?: StringNullableFilter<'Course'> | string | null;
    price?: FloatFilter<'Course'> | number;
    categoryId?: StringFilter<'Course'> | string;
    createdAt?: DateTimeFilter<'Course'> | Date | string;
    updatedAt?: DateTimeFilter<'Course'> | Date | string;
  };

  export type CourseCategoryCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseCategoryUncheckedCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseCategoryCreateOrConnectWithoutCoursesInput = {
    where: CourseCategoryWhereUniqueInput;
    create: XOR<
      CourseCategoryCreateWithoutCoursesInput,
      CourseCategoryUncheckedCreateWithoutCoursesInput
    >;
  };

  export type CourseCategoryUpsertWithoutCoursesInput = {
    update: XOR<
      CourseCategoryUpdateWithoutCoursesInput,
      CourseCategoryUncheckedUpdateWithoutCoursesInput
    >;
    create: XOR<
      CourseCategoryCreateWithoutCoursesInput,
      CourseCategoryUncheckedCreateWithoutCoursesInput
    >;
    where?: CourseCategoryWhereInput;
  };

  export type CourseCategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseCategoryWhereInput;
    data: XOR<
      CourseCategoryUpdateWithoutCoursesInput,
      CourseCategoryUncheckedUpdateWithoutCoursesInput
    >;
  };

  export type CourseCategoryUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCategoryUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductCreateManyCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NormalProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NormalProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    stock?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCreateManyCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
