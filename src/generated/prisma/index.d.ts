
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model NormalProductCategory
 * 
 */
export type NormalProductCategory = $Result.DefaultSelection<Prisma.$NormalProductCategoryPayload>
/**
 * Model NormalProduct
 * 
 */
export type NormalProduct = $Result.DefaultSelection<Prisma.$NormalProductPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model CourseCategory
 * 
 */
export type CourseCategory = $Result.DefaultSelection<Prisma.$CourseCategoryPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model VerificationCode
 * 短信验证码表：登录/注册/重置密码等场景使用
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model TempFile
 * 
 */
export type TempFile = $Result.DefaultSelection<Prisma.$TempFilePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  DISABLED: 'DISABLED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const CourseType: {
  FREE: 'FREE',
  PAID: 'PAID'
};

export type CourseType = (typeof CourseType)[keyof typeof CourseType]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type CourseType = $Enums.CourseType

export const CourseType: typeof $Enums.CourseType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.normalProductCategory`: Exposes CRUD operations for the **NormalProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NormalProductCategories
    * const normalProductCategories = await prisma.normalProductCategory.findMany()
    * ```
    */
  get normalProductCategory(): Prisma.NormalProductCategoryDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempFile`: Exposes CRUD operations for the **TempFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempFiles
    * const tempFiles = await prisma.tempFile.findMany()
    * ```
    */
  get tempFile(): Prisma.TempFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    NormalProductCategory: 'NormalProductCategory',
    NormalProduct: 'NormalProduct',
    File: 'File',
    CourseCategory: 'CourseCategory',
    Course: 'Course',
    VerificationCode: 'VerificationCode',
    TempFile: 'TempFile',
    Order: 'Order',
    OrderItem: 'OrderItem',
    UserAddress: 'UserAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "normalProductCategory" | "normalProduct" | "file" | "courseCategory" | "course" | "verificationCode" | "tempFile" | "order" | "orderItem" | "userAddress"
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
      NormalProductCategory: {
        payload: Prisma.$NormalProductCategoryPayload<ExtArgs>
        fields: Prisma.NormalProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NormalProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NormalProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.NormalProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NormalProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          findMany: {
            args: Prisma.NormalProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[]
          }
          create: {
            args: Prisma.NormalProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          createMany: {
            args: Prisma.NormalProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NormalProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.NormalProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          update: {
            args: Prisma.NormalProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NormalProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NormalProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NormalProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NormalProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.NormalProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNormalProductCategory>
          }
          groupBy: {
            args: Prisma.NormalProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NormalProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NormalProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NormalProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      NormalProduct: {
        payload: Prisma.$NormalProductPayload<ExtArgs>
        fields: Prisma.NormalProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NormalProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NormalProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          findFirst: {
            args: Prisma.NormalProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NormalProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          findMany: {
            args: Prisma.NormalProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[]
          }
          create: {
            args: Prisma.NormalProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          createMany: {
            args: Prisma.NormalProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NormalProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[]
          }
          delete: {
            args: Prisma.NormalProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          update: {
            args: Prisma.NormalProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          deleteMany: {
            args: Prisma.NormalProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NormalProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NormalProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>[]
          }
          upsert: {
            args: Prisma.NormalProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormalProductPayload>
          }
          aggregate: {
            args: Prisma.NormalProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNormalProduct>
          }
          groupBy: {
            args: Prisma.NormalProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<NormalProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.NormalProductCountArgs<ExtArgs>
            result: $Utils.Optional<NormalProductCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      CourseCategory: {
        payload: Prisma.$CourseCategoryPayload<ExtArgs>
        fields: Prisma.CourseCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findFirst: {
            args: Prisma.CourseCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findMany: {
            args: Prisma.CourseCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          create: {
            args: Prisma.CourseCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          createMany: {
            args: Prisma.CourseCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          delete: {
            args: Prisma.CourseCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          update: {
            args: Prisma.CourseCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CourseCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CourseCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          aggregate: {
            args: Prisma.CourseCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseCategory>
          }
          groupBy: {
            args: Prisma.CourseCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      TempFile: {
        payload: Prisma.$TempFilePayload<ExtArgs>
        fields: Prisma.TempFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          findFirst: {
            args: Prisma.TempFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          findMany: {
            args: Prisma.TempFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>[]
          }
          create: {
            args: Prisma.TempFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          createMany: {
            args: Prisma.TempFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>[]
          }
          delete: {
            args: Prisma.TempFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          update: {
            args: Prisma.TempFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          deleteMany: {
            args: Prisma.TempFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>[]
          }
          upsert: {
            args: Prisma.TempFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempFilePayload>
          }
          aggregate: {
            args: Prisma.TempFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempFile>
          }
          groupBy: {
            args: Prisma.TempFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempFileCountArgs<ExtArgs>
            result: $Utils.Optional<TempFileCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    normalProductCategory?: NormalProductCategoryOmit
    normalProduct?: NormalProductOmit
    file?: FileOmit
    courseCategory?: CourseCategoryOmit
    course?: CourseOmit
    verificationCode?: VerificationCodeOmit
    tempFile?: TempFileOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    userAddress?: UserAddressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    addresses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
  }


  /**
   * Count Type NormalProductCategoryCountOutputType
   */

  export type NormalProductCategoryCountOutputType = {
    normalProducts: number
  }

  export type NormalProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    normalProducts?: boolean | NormalProductCategoryCountOutputTypeCountNormalProductsArgs
  }

  // Custom InputTypes
  /**
   * NormalProductCategoryCountOutputType without action
   */
  export type NormalProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategoryCountOutputType
     */
    select?: NormalProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NormalProductCategoryCountOutputType without action
   */
  export type NormalProductCategoryCountOutputTypeCountNormalProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormalProductWhereInput
  }


  /**
   * Count Type NormalProductCountOutputType
   */

  export type NormalProductCountOutputType = {
    galleryImages: number
  }

  export type NormalProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | NormalProductCountOutputTypeCountGalleryImagesArgs
  }

  // Custom InputTypes
  /**
   * NormalProductCountOutputType without action
   */
  export type NormalProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCountOutputType
     */
    select?: NormalProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NormalProductCountOutputType without action
   */
  export type NormalProductCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    avatarUrl: number
    galleryImages: number
    coverImage: number
    videoUrl: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarUrl?: boolean | FileCountOutputTypeCountAvatarUrlArgs
    galleryImages?: boolean | FileCountOutputTypeCountGalleryImagesArgs
    coverImage?: boolean | FileCountOutputTypeCountCoverImageArgs
    videoUrl?: boolean | FileCountOutputTypeCountVideoUrlArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountAvatarUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormalProductWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountCoverImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountVideoUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCategoryCountOutputType
   */

  export type CourseCategoryCountOutputType = {
    courses: number
  }

  export type CourseCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseCategoryCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategoryCountOutputType
     */
    select?: CourseCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
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
    avatarFileId: number | null
  }

  export type UserSumAggregateOutputType = {
    avatarFileId: number | null
  }

  export type UserMinAggregateOutputType = {
    username: string | null
    id: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    rejectReason: string | null
    avatarFileId: number | null
    email: string | null
    gender: string | null
    idType: string | null
    idNumber: string | null
    entity: string | null
    entityAddress: string | null
    cityScope: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    username: string | null
    id: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    rejectReason: string | null
    avatarFileId: number | null
    email: string | null
    gender: string | null
    idType: string | null
    idNumber: string | null
    entity: string | null
    entityAddress: string | null
    cityScope: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    username: number
    id: number
    name: number
    phone: number
    roles: number
    status: number
    rejectReason: number
    avatarFileId: number
    email: number
    gender: number
    idType: number
    idNumber: number
    entity: number
    entityAddress: number
    cityScope: number
    competitionScopes: number
    passwordHash: number
    powerOfAttorney: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    avatarFileId?: true
  }

  export type UserSumAggregateInputType = {
    avatarFileId?: true
  }

  export type UserMinAggregateInputType = {
    username?: true
    id?: true
    name?: true
    phone?: true
    status?: true
    rejectReason?: true
    avatarFileId?: true
    email?: true
    gender?: true
    idType?: true
    idNumber?: true
    entity?: true
    entityAddress?: true
    cityScope?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    username?: true
    id?: true
    name?: true
    phone?: true
    status?: true
    rejectReason?: true
    avatarFileId?: true
    email?: true
    gender?: true
    idType?: true
    idNumber?: true
    entity?: true
    entityAddress?: true
    cityScope?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    username?: true
    id?: true
    name?: true
    phone?: true
    roles?: true
    status?: true
    rejectReason?: true
    avatarFileId?: true
    email?: true
    gender?: true
    idType?: true
    idNumber?: true
    entity?: true
    entityAddress?: true
    cityScope?: true
    competitionScopes?: true
    passwordHash?: true
    powerOfAttorney?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    id: string
    name: string
    phone: string
    roles: $Enums.Role[]
    status: $Enums.UserStatus
    rejectReason: string | null
    avatarFileId: number | null
    email: string | null
    gender: string | null
    idType: string | null
    idNumber: string | null
    entity: string | null
    entityAddress: string | null
    cityScope: string | null
    competitionScopes: string[]
    passwordHash: string | null
    powerOfAttorney: JsonValue | null
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    id?: boolean
    name?: boolean
    phone?: boolean
    roles?: boolean
    status?: boolean
    rejectReason?: boolean
    avatarFileId?: boolean
    email?: boolean
    gender?: boolean
    idType?: boolean
    idNumber?: boolean
    entity?: boolean
    entityAddress?: boolean
    cityScope?: boolean
    competitionScopes?: boolean
    passwordHash?: boolean
    powerOfAttorney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    id?: boolean
    name?: boolean
    phone?: boolean
    roles?: boolean
    status?: boolean
    rejectReason?: boolean
    avatarFileId?: boolean
    email?: boolean
    gender?: boolean
    idType?: boolean
    idNumber?: boolean
    entity?: boolean
    entityAddress?: boolean
    cityScope?: boolean
    competitionScopes?: boolean
    passwordHash?: boolean
    powerOfAttorney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    id?: boolean
    name?: boolean
    phone?: boolean
    roles?: boolean
    status?: boolean
    rejectReason?: boolean
    avatarFileId?: boolean
    email?: boolean
    gender?: boolean
    idType?: boolean
    idNumber?: boolean
    entity?: boolean
    entityAddress?: boolean
    cityScope?: boolean
    competitionScopes?: boolean
    passwordHash?: boolean
    powerOfAttorney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    username?: boolean
    id?: boolean
    name?: boolean
    phone?: boolean
    roles?: boolean
    status?: boolean
    rejectReason?: boolean
    avatarFileId?: boolean
    email?: boolean
    gender?: boolean
    idType?: boolean
    idNumber?: boolean
    entity?: boolean
    entityAddress?: boolean
    cityScope?: boolean
    competitionScopes?: boolean
    passwordHash?: boolean
    powerOfAttorney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "id" | "name" | "phone" | "roles" | "status" | "rejectReason" | "avatarFileId" | "email" | "gender" | "idType" | "idNumber" | "entity" | "entityAddress" | "cityScope" | "competitionScopes" | "passwordHash" | "powerOfAttorney" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarUrl?: boolean | User$avatarUrlArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      /**
       * 头像地址
       */
      avatarUrl: Prisma.$FilePayload<ExtArgs> | null
      /**
       * 用户订单列表
       */
      orders: Prisma.$OrderPayload<ExtArgs>[]
      addresses: Prisma.$UserAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * 用户名（唯一，用于用户名登录）
       */
      username: string
      /**
       * 主键，使用 cuid
       */
      id: string
      /**
       * 姓名
       */
      name: string
      /**
       * 手机号（唯一，作为主要登录标识）
       */
      phone: string
      /**
       * 角色列表，例如：admin、leader、teacher、player 等
       */
      roles: $Enums.Role[]
      status: $Enums.UserStatus
      rejectReason: string | null
      /**
       * 头像文件ID
       */
      avatarFileId: number | null
      /**
       * 邮箱
       */
      email: string | null
      /**
       * 性别
       */
      gender: string | null
      /**
       * 证件类型（如身份证、护照）
       */
      idType: string | null
      /**
       * 证件号码
       */
      idNumber: string | null
      /**
       * 所属单位/组织名称
       */
      entity: string | null
      /**
       * 单位地址
       */
      entityAddress: string | null
      /**
       * 市级负责人查看范围（设区市）
       */
      cityScope: string | null
      /**
       * 赛项负责人查看范围（赛项ID列表）
       */
      competitionScopes: string[]
      /**
       * 密码哈希（如使用 bcrypt）
       */
      passwordHash: string | null
      /**
       * 授权委托书（JSON 格式存储相关信息）
       */
      powerOfAttorney: Prisma.JsonValue | null
      /**
       * 创建时间
       */
      createdAt: Date
      /**
       * 更新时间（由数据库自动更新）
       */
      updatedAt: Date
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
     * // Only select the `username`
     * const userWithUsernameOnly = await prisma.user.findMany({ select: { username: true } })
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
     * // Create many Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.createManyAndReturn({
     *   select: { username: true },
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
     * // Update zero or more Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.updateManyAndReturn({
     *   select: { username: true },
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
    avatarUrl<T extends User$avatarUrlArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarUrlArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly roles: FieldRef<"User", 'Role[]'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly rejectReason: FieldRef<"User", 'String'>
    readonly avatarFileId: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly idType: FieldRef<"User", 'String'>
    readonly idNumber: FieldRef<"User", 'String'>
    readonly entity: FieldRef<"User", 'String'>
    readonly entityAddress: FieldRef<"User", 'String'>
    readonly cityScope: FieldRef<"User", 'String'>
    readonly competitionScopes: FieldRef<"User", 'String[]'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly powerOfAttorney: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.avatarUrl
   */
  export type User$avatarUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    cursor?: UserAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
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
   * Model NormalProductCategory
   */

  export type AggregateNormalProductCategory = {
    _count: NormalProductCategoryCountAggregateOutputType | null
    _min: NormalProductCategoryMinAggregateOutputType | null
    _max: NormalProductCategoryMaxAggregateOutputType | null
  }

  export type NormalProductCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NormalProductCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NormalProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NormalProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NormalProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NormalProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NormalProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NormalProductCategory to aggregate.
     */
    where?: NormalProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?: NormalProductCategoryOrderByWithRelationInput | NormalProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NormalProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NormalProductCategories
    **/
    _count?: true | NormalProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NormalProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NormalProductCategoryMaxAggregateInputType
  }

  export type GetNormalProductCategoryAggregateType<T extends NormalProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNormalProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormalProductCategory[P]>
      : GetScalarType<T[P], AggregateNormalProductCategory[P]>
  }




  export type NormalProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormalProductCategoryWhereInput
    orderBy?: NormalProductCategoryOrderByWithAggregationInput | NormalProductCategoryOrderByWithAggregationInput[]
    by: NormalProductCategoryScalarFieldEnum[] | NormalProductCategoryScalarFieldEnum
    having?: NormalProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NormalProductCategoryCountAggregateInputType | true
    _min?: NormalProductCategoryMinAggregateInputType
    _max?: NormalProductCategoryMaxAggregateInputType
  }

  export type NormalProductCategoryGroupByOutputType = {
    id: string
    name: string
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: NormalProductCategoryCountAggregateOutputType | null
    _min: NormalProductCategoryMinAggregateOutputType | null
    _max: NormalProductCategoryMaxAggregateOutputType | null
  }

  type GetNormalProductCategoryGroupByPayload<T extends NormalProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NormalProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NormalProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NormalProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NormalProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NormalProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    normalProducts?: boolean | NormalProductCategory$normalProductsArgs<ExtArgs>
    _count?: boolean | NormalProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normalProductCategory"]>

  export type NormalProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["normalProductCategory"]>

  export type NormalProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["normalProductCategory"]>

  export type NormalProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NormalProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["normalProductCategory"]>
  export type NormalProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    normalProducts?: boolean | NormalProductCategory$normalProductsArgs<ExtArgs>
    _count?: boolean | NormalProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NormalProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NormalProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NormalProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NormalProductCategory"
    objects: {
      normalProducts: Prisma.$NormalProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * 是否启用
       */
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["normalProductCategory"]>
    composites: {}
  }

  type NormalProductCategoryGetPayload<S extends boolean | null | undefined | NormalProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$NormalProductCategoryPayload, S>

  type NormalProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NormalProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NormalProductCategoryCountAggregateInputType | true
    }

  export interface NormalProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NormalProductCategory'], meta: { name: 'NormalProductCategory' } }
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
    findUnique<T extends NormalProductCategoryFindUniqueArgs>(args: SelectSubset<T, NormalProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends NormalProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NormalProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends NormalProductCategoryFindFirstArgs>(args?: SelectSubset<T, NormalProductCategoryFindFirstArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends NormalProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NormalProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends NormalProductCategoryFindManyArgs>(args?: SelectSubset<T, NormalProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends NormalProductCategoryCreateArgs>(args: SelectSubset<T, NormalProductCategoryCreateArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends NormalProductCategoryCreateManyArgs>(args?: SelectSubset<T, NormalProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends NormalProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NormalProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends NormalProductCategoryDeleteArgs>(args: SelectSubset<T, NormalProductCategoryDeleteArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends NormalProductCategoryUpdateArgs>(args: SelectSubset<T, NormalProductCategoryUpdateArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends NormalProductCategoryDeleteManyArgs>(args?: SelectSubset<T, NormalProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends NormalProductCategoryUpdateManyArgs>(args: SelectSubset<T, NormalProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends NormalProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NormalProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends NormalProductCategoryUpsertArgs>(args: SelectSubset<T, NormalProductCategoryUpsertArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
          : GetScalarType<T['select'], NormalProductCategoryCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends NormalProductCategoryAggregateArgs>(args: Subset<T, NormalProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetNormalProductCategoryAggregateType<T>>

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
    >(args: SubsetIntersection<T, NormalProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormalProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__NormalProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    normalProducts<T extends NormalProductCategory$normalProductsArgs<ExtArgs> = {}>(args?: Subset<T, NormalProductCategory$normalProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NormalProductCategory model
   */
  interface NormalProductCategoryFieldRefs {
    readonly id: FieldRef<"NormalProductCategory", 'String'>
    readonly name: FieldRef<"NormalProductCategory", 'String'>
    readonly isEnabled: FieldRef<"NormalProductCategory", 'Boolean'>
    readonly createdAt: FieldRef<"NormalProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"NormalProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NormalProductCategory findUnique
   */
  export type NormalProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where: NormalProductCategoryWhereUniqueInput
  }

  /**
   * NormalProductCategory findUniqueOrThrow
   */
  export type NormalProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where: NormalProductCategoryWhereUniqueInput
  }

  /**
   * NormalProductCategory findFirst
   */
  export type NormalProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where?: NormalProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?: NormalProductCategoryOrderByWithRelationInput | NormalProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NormalProductCategories.
     */
    distinct?: NormalProductCategoryScalarFieldEnum | NormalProductCategoryScalarFieldEnum[]
  }

  /**
   * NormalProductCategory findFirstOrThrow
   */
  export type NormalProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NormalProductCategory to fetch.
     */
    where?: NormalProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?: NormalProductCategoryOrderByWithRelationInput | NormalProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NormalProductCategories.
     */
    distinct?: NormalProductCategoryScalarFieldEnum | NormalProductCategoryScalarFieldEnum[]
  }

  /**
   * NormalProductCategory findMany
   */
  export type NormalProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NormalProductCategories to fetch.
     */
    where?: NormalProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProductCategories to fetch.
     */
    orderBy?: NormalProductCategoryOrderByWithRelationInput | NormalProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NormalProductCategories.
     */
    cursor?: NormalProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProductCategories.
     */
    skip?: number
    distinct?: NormalProductCategoryScalarFieldEnum | NormalProductCategoryScalarFieldEnum[]
  }

  /**
   * NormalProductCategory create
   */
  export type NormalProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NormalProductCategory.
     */
    data: XOR<NormalProductCategoryCreateInput, NormalProductCategoryUncheckedCreateInput>
  }

  /**
   * NormalProductCategory createMany
   */
  export type NormalProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NormalProductCategories.
     */
    data: NormalProductCategoryCreateManyInput | NormalProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NormalProductCategory createManyAndReturn
   */
  export type NormalProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NormalProductCategories.
     */
    data: NormalProductCategoryCreateManyInput | NormalProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NormalProductCategory update
   */
  export type NormalProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NormalProductCategory.
     */
    data: XOR<NormalProductCategoryUpdateInput, NormalProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which NormalProductCategory to update.
     */
    where: NormalProductCategoryWhereUniqueInput
  }

  /**
   * NormalProductCategory updateMany
   */
  export type NormalProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NormalProductCategories.
     */
    data: XOR<NormalProductCategoryUpdateManyMutationInput, NormalProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NormalProductCategories to update
     */
    where?: NormalProductCategoryWhereInput
    /**
     * Limit how many NormalProductCategories to update.
     */
    limit?: number
  }

  /**
   * NormalProductCategory updateManyAndReturn
   */
  export type NormalProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NormalProductCategories.
     */
    data: XOR<NormalProductCategoryUpdateManyMutationInput, NormalProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NormalProductCategories to update
     */
    where?: NormalProductCategoryWhereInput
    /**
     * Limit how many NormalProductCategories to update.
     */
    limit?: number
  }

  /**
   * NormalProductCategory upsert
   */
  export type NormalProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NormalProductCategory to update in case it exists.
     */
    where: NormalProductCategoryWhereUniqueInput
    /**
     * In case the NormalProductCategory found by the `where` argument doesn't exist, create a new NormalProductCategory with this data.
     */
    create: XOR<NormalProductCategoryCreateInput, NormalProductCategoryUncheckedCreateInput>
    /**
     * In case the NormalProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NormalProductCategoryUpdateInput, NormalProductCategoryUncheckedUpdateInput>
  }

  /**
   * NormalProductCategory delete
   */
  export type NormalProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which NormalProductCategory to delete.
     */
    where: NormalProductCategoryWhereUniqueInput
  }

  /**
   * NormalProductCategory deleteMany
   */
  export type NormalProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NormalProductCategories to delete
     */
    where?: NormalProductCategoryWhereInput
    /**
     * Limit how many NormalProductCategories to delete.
     */
    limit?: number
  }

  /**
   * NormalProductCategory.normalProducts
   */
  export type NormalProductCategory$normalProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    where?: NormalProductWhereInput
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    cursor?: NormalProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[]
  }

  /**
   * NormalProductCategory without action
   */
  export type NormalProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProductCategory
     */
    select?: NormalProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProductCategory
     */
    omit?: NormalProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model NormalProduct
   */

  export type AggregateNormalProduct = {
    _count: NormalProductCountAggregateOutputType | null
    _avg: NormalProductAvgAggregateOutputType | null
    _sum: NormalProductSumAggregateOutputType | null
    _min: NormalProductMinAggregateOutputType | null
    _max: NormalProductMaxAggregateOutputType | null
  }

  export type NormalProductAvgAggregateOutputType = {
    price: number | null
    discountPrice: number | null
    stock: number | null
    detailImageId: number | null
  }

  export type NormalProductSumAggregateOutputType = {
    price: number | null
    discountPrice: number | null
    stock: number | null
    detailImageId: number | null
  }

  export type NormalProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discountPrice: number | null
    stock: number | null
    detailImageId: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NormalProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discountPrice: number | null
    stock: number | null
    detailImageId: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NormalProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    discountPrice: number
    stock: number
    detailImageId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NormalProductAvgAggregateInputType = {
    price?: true
    discountPrice?: true
    stock?: true
    detailImageId?: true
  }

  export type NormalProductSumAggregateInputType = {
    price?: true
    discountPrice?: true
    stock?: true
    detailImageId?: true
  }

  export type NormalProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discountPrice?: true
    stock?: true
    detailImageId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NormalProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discountPrice?: true
    stock?: true
    detailImageId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NormalProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discountPrice?: true
    stock?: true
    detailImageId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NormalProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NormalProduct to aggregate.
     */
    where?: NormalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NormalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NormalProducts
    **/
    _count?: true | NormalProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NormalProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NormalProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NormalProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NormalProductMaxAggregateInputType
  }

  export type GetNormalProductAggregateType<T extends NormalProductAggregateArgs> = {
        [P in keyof T & keyof AggregateNormalProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormalProduct[P]>
      : GetScalarType<T[P], AggregateNormalProduct[P]>
  }




  export type NormalProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormalProductWhereInput
    orderBy?: NormalProductOrderByWithAggregationInput | NormalProductOrderByWithAggregationInput[]
    by: NormalProductScalarFieldEnum[] | NormalProductScalarFieldEnum
    having?: NormalProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NormalProductCountAggregateInputType | true
    _avg?: NormalProductAvgAggregateInputType
    _sum?: NormalProductSumAggregateInputType
    _min?: NormalProductMinAggregateInputType
    _max?: NormalProductMaxAggregateInputType
  }

  export type NormalProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    discountPrice: number | null
    stock: number
    detailImageId: number | null
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: NormalProductCountAggregateOutputType | null
    _avg: NormalProductAvgAggregateOutputType | null
    _sum: NormalProductSumAggregateOutputType | null
    _min: NormalProductMinAggregateOutputType | null
    _max: NormalProductMaxAggregateOutputType | null
  }

  type GetNormalProductGroupByPayload<T extends NormalProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NormalProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NormalProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NormalProductGroupByOutputType[P]>
            : GetScalarType<T[P], NormalProductGroupByOutputType[P]>
        }
      >
    >


  export type NormalProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discountPrice?: boolean
    stock?: boolean
    detailImageId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    galleryImages?: boolean | NormalProduct$galleryImagesArgs<ExtArgs>
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
    _count?: boolean | NormalProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normalProduct"]>

  export type NormalProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discountPrice?: boolean
    stock?: boolean
    detailImageId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normalProduct"]>

  export type NormalProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discountPrice?: boolean
    stock?: boolean
    detailImageId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normalProduct"]>

  export type NormalProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discountPrice?: boolean
    stock?: boolean
    detailImageId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NormalProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "discountPrice" | "stock" | "detailImageId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["normalProduct"]>
  export type NormalProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | NormalProduct$galleryImagesArgs<ExtArgs>
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
    _count?: boolean | NormalProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NormalProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
  }
  export type NormalProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailImage?: boolean | NormalProduct$detailImageArgs<ExtArgs>
    category?: boolean | NormalProductCategoryDefaultArgs<ExtArgs>
  }

  export type $NormalProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NormalProduct"
    objects: {
      /**
       * 商品图集（列表页/轮播）
       */
      galleryImages: Prisma.$FilePayload<ExtArgs>[]
      /**
       * 详情图关联
       */
      detailImage: Prisma.$FilePayload<ExtArgs> | null
      /**
       * 分类关联
       */
      category: Prisma.$NormalProductCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * 主键，使用 uuid
       */
      id: string
      /**
       * 商品名称
       */
      name: string
      /**
       * 商品简介
       */
      description: string | null
      /**
       * 价格
       */
      price: number
      /**
       * 优惠价
       */
      discountPrice: number | null
      /**
       * 库存
       */
      stock: number
      /**
       * 详情图ID（外键）
       */
      detailImageId: number | null
      /**
       * 分类 ID
       */
      categoryId: string
      /**
       * 创建时间
       */
      createdAt: Date
      /**
       * 更新时间
       */
      updatedAt: Date
    }, ExtArgs["result"]["normalProduct"]>
    composites: {}
  }

  type NormalProductGetPayload<S extends boolean | null | undefined | NormalProductDefaultArgs> = $Result.GetResult<Prisma.$NormalProductPayload, S>

  type NormalProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NormalProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NormalProductCountAggregateInputType | true
    }

  export interface NormalProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NormalProduct'], meta: { name: 'NormalProduct' } }
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
    findUnique<T extends NormalProductFindUniqueArgs>(args: SelectSubset<T, NormalProductFindUniqueArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends NormalProductFindUniqueOrThrowArgs>(args: SelectSubset<T, NormalProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends NormalProductFindFirstArgs>(args?: SelectSubset<T, NormalProductFindFirstArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends NormalProductFindFirstOrThrowArgs>(args?: SelectSubset<T, NormalProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends NormalProductFindManyArgs>(args?: SelectSubset<T, NormalProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends NormalProductCreateArgs>(args: SelectSubset<T, NormalProductCreateArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends NormalProductCreateManyArgs>(args?: SelectSubset<T, NormalProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends NormalProductCreateManyAndReturnArgs>(args?: SelectSubset<T, NormalProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends NormalProductDeleteArgs>(args: SelectSubset<T, NormalProductDeleteArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends NormalProductUpdateArgs>(args: SelectSubset<T, NormalProductUpdateArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends NormalProductDeleteManyArgs>(args?: SelectSubset<T, NormalProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends NormalProductUpdateManyArgs>(args: SelectSubset<T, NormalProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends NormalProductUpdateManyAndReturnArgs>(args: SelectSubset<T, NormalProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends NormalProductUpsertArgs>(args: SelectSubset<T, NormalProductUpsertArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends NormalProductAggregateArgs>(args: Subset<T, NormalProductAggregateArgs>): Prisma.PrismaPromise<GetNormalProductAggregateType<T>>

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
    >(args: SubsetIntersection<T, NormalProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormalProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__NormalProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galleryImages<T extends NormalProduct$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, NormalProduct$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detailImage<T extends NormalProduct$detailImageArgs<ExtArgs> = {}>(args?: Subset<T, NormalProduct$detailImageArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends NormalProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormalProductCategoryDefaultArgs<ExtArgs>>): Prisma__NormalProductCategoryClient<$Result.GetResult<Prisma.$NormalProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NormalProduct model
   */
  interface NormalProductFieldRefs {
    readonly id: FieldRef<"NormalProduct", 'String'>
    readonly name: FieldRef<"NormalProduct", 'String'>
    readonly description: FieldRef<"NormalProduct", 'String'>
    readonly price: FieldRef<"NormalProduct", 'Float'>
    readonly discountPrice: FieldRef<"NormalProduct", 'Float'>
    readonly stock: FieldRef<"NormalProduct", 'Int'>
    readonly detailImageId: FieldRef<"NormalProduct", 'Int'>
    readonly categoryId: FieldRef<"NormalProduct", 'String'>
    readonly createdAt: FieldRef<"NormalProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"NormalProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NormalProduct findUnique
   */
  export type NormalProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter, which NormalProduct to fetch.
     */
    where: NormalProductWhereUniqueInput
  }

  /**
   * NormalProduct findUniqueOrThrow
   */
  export type NormalProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter, which NormalProduct to fetch.
     */
    where: NormalProductWhereUniqueInput
  }

  /**
   * NormalProduct findFirst
   */
  export type NormalProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter, which NormalProduct to fetch.
     */
    where?: NormalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NormalProducts.
     */
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[]
  }

  /**
   * NormalProduct findFirstOrThrow
   */
  export type NormalProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter, which NormalProduct to fetch.
     */
    where?: NormalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NormalProducts.
     */
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[]
  }

  /**
   * NormalProduct findMany
   */
  export type NormalProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter, which NormalProducts to fetch.
     */
    where?: NormalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NormalProducts to fetch.
     */
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NormalProducts.
     */
    cursor?: NormalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NormalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NormalProducts.
     */
    skip?: number
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[]
  }

  /**
   * NormalProduct create
   */
  export type NormalProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * The data needed to create a NormalProduct.
     */
    data: XOR<NormalProductCreateInput, NormalProductUncheckedCreateInput>
  }

  /**
   * NormalProduct createMany
   */
  export type NormalProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NormalProducts.
     */
    data: NormalProductCreateManyInput | NormalProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NormalProduct createManyAndReturn
   */
  export type NormalProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * The data used to create many NormalProducts.
     */
    data: NormalProductCreateManyInput | NormalProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NormalProduct update
   */
  export type NormalProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * The data needed to update a NormalProduct.
     */
    data: XOR<NormalProductUpdateInput, NormalProductUncheckedUpdateInput>
    /**
     * Choose, which NormalProduct to update.
     */
    where: NormalProductWhereUniqueInput
  }

  /**
   * NormalProduct updateMany
   */
  export type NormalProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NormalProducts.
     */
    data: XOR<NormalProductUpdateManyMutationInput, NormalProductUncheckedUpdateManyInput>
    /**
     * Filter which NormalProducts to update
     */
    where?: NormalProductWhereInput
    /**
     * Limit how many NormalProducts to update.
     */
    limit?: number
  }

  /**
   * NormalProduct updateManyAndReturn
   */
  export type NormalProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * The data used to update NormalProducts.
     */
    data: XOR<NormalProductUpdateManyMutationInput, NormalProductUncheckedUpdateManyInput>
    /**
     * Filter which NormalProducts to update
     */
    where?: NormalProductWhereInput
    /**
     * Limit how many NormalProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NormalProduct upsert
   */
  export type NormalProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * The filter to search for the NormalProduct to update in case it exists.
     */
    where: NormalProductWhereUniqueInput
    /**
     * In case the NormalProduct found by the `where` argument doesn't exist, create a new NormalProduct with this data.
     */
    create: XOR<NormalProductCreateInput, NormalProductUncheckedCreateInput>
    /**
     * In case the NormalProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NormalProductUpdateInput, NormalProductUncheckedUpdateInput>
  }

  /**
   * NormalProduct delete
   */
  export type NormalProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    /**
     * Filter which NormalProduct to delete.
     */
    where: NormalProductWhereUniqueInput
  }

  /**
   * NormalProduct deleteMany
   */
  export type NormalProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NormalProducts to delete
     */
    where?: NormalProductWhereInput
    /**
     * Limit how many NormalProducts to delete.
     */
    limit?: number
  }

  /**
   * NormalProduct.galleryImages
   */
  export type NormalProduct$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * NormalProduct.detailImage
   */
  export type NormalProduct$detailImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * NormalProduct without action
   */
  export type NormalProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    fileKey: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    fileKey: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    fileKey: number
    fileName: number
    fileSize: number
    mimeType: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    meta: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    fileSize?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    fileSize?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    meta?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    fileKey: string
    fileName: string | null
    fileSize: number
    mimeType: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    meta: JsonValue | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    meta?: boolean
    avatarUrl?: boolean | File$avatarUrlArgs<ExtArgs>
    galleryImages?: boolean | File$galleryImagesArgs<ExtArgs>
    detailImage?: boolean | File$detailImageArgs<ExtArgs>
    coverImage?: boolean | File$coverImageArgs<ExtArgs>
    videoUrl?: boolean | File$videoUrlArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    meta?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    meta?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    meta?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileKey" | "fileName" | "fileSize" | "mimeType" | "createdAt" | "updatedAt" | "deletedAt" | "meta", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarUrl?: boolean | File$avatarUrlArgs<ExtArgs>
    galleryImages?: boolean | File$galleryImagesArgs<ExtArgs>
    detailImage?: boolean | File$detailImageArgs<ExtArgs>
    coverImage?: boolean | File$coverImageArgs<ExtArgs>
    videoUrl?: boolean | File$videoUrlArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      avatarUrl: Prisma.$UserPayload<ExtArgs>[]
      galleryImages: Prisma.$NormalProductPayload<ExtArgs>[]
      detailImage: Prisma.$NormalProductPayload<ExtArgs> | null
      coverImage: Prisma.$CoursePayload<ExtArgs>[]
      videoUrl: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileKey: string
      fileName: string | null
      fileSize: number
      mimeType: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      meta: Prisma.JsonValue | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatarUrl<T extends File$avatarUrlArgs<ExtArgs> = {}>(args?: Subset<T, File$avatarUrlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleryImages<T extends File$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, File$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detailImage<T extends File$detailImageArgs<ExtArgs> = {}>(args?: Subset<T, File$detailImageArgs<ExtArgs>>): Prisma__NormalProductClient<$Result.GetResult<Prisma.$NormalProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coverImage<T extends File$coverImageArgs<ExtArgs> = {}>(args?: Subset<T, File$coverImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoUrl<T extends File$videoUrlArgs<ExtArgs> = {}>(args?: Subset<T, File$videoUrlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly fileKey: FieldRef<"File", 'String'>
    readonly fileName: FieldRef<"File", 'String'>
    readonly fileSize: FieldRef<"File", 'Int'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
    readonly deletedAt: FieldRef<"File", 'DateTime'>
    readonly meta: FieldRef<"File", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.avatarUrl
   */
  export type File$avatarUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * File.galleryImages
   */
  export type File$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    where?: NormalProductWhereInput
    orderBy?: NormalProductOrderByWithRelationInput | NormalProductOrderByWithRelationInput[]
    cursor?: NormalProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NormalProductScalarFieldEnum | NormalProductScalarFieldEnum[]
  }

  /**
   * File.detailImage
   */
  export type File$detailImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormalProduct
     */
    select?: NormalProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NormalProduct
     */
    omit?: NormalProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormalProductInclude<ExtArgs> | null
    where?: NormalProductWhereInput
  }

  /**
   * File.coverImage
   */
  export type File$coverImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * File.videoUrl
   */
  export type File$videoUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model CourseCategory
   */

  export type AggregateCourseCategory = {
    _count: CourseCategoryCountAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  export type CourseCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCategoryCountAggregateOutputType = {
    id: number
    name: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseCategoryMinAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCategoryCountAggregateInputType = {
    id?: true
    name?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategory to aggregate.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseCategories
    **/
    _count?: true | CourseCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type GetCourseCategoryAggregateType<T extends CourseCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseCategory[P]>
      : GetScalarType<T[P], AggregateCourseCategory[P]>
  }




  export type CourseCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseCategoryWhereInput
    orderBy?: CourseCategoryOrderByWithAggregationInput | CourseCategoryOrderByWithAggregationInput[]
    by: CourseCategoryScalarFieldEnum[] | CourseCategoryScalarFieldEnum
    having?: CourseCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCategoryCountAggregateInputType | true
    _min?: CourseCategoryMinAggregateInputType
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type CourseCategoryGroupByOutputType = {
    id: string
    name: string
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseCategoryCountAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  type GetCourseCategoryGroupByPayload<T extends CourseCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CourseCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | CourseCategory$coursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectScalar = {
    id?: boolean
    name?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["courseCategory"]>
  export type CourseCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseCategory$coursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseCategory"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * 是否启用
       */
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseCategory"]>
    composites: {}
  }

  type CourseCategoryGetPayload<S extends boolean | null | undefined | CourseCategoryDefaultArgs> = $Result.GetResult<Prisma.$CourseCategoryPayload, S>

  type CourseCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCategoryCountAggregateInputType | true
    }

  export interface CourseCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseCategory'], meta: { name: 'CourseCategory' } }
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
    findUnique<T extends CourseCategoryFindUniqueArgs>(args: SelectSubset<T, CourseCategoryFindUniqueArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends CourseCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends CourseCategoryFindFirstArgs>(args?: SelectSubset<T, CourseCategoryFindFirstArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends CourseCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends CourseCategoryFindManyArgs>(args?: SelectSubset<T, CourseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends CourseCategoryCreateArgs>(args: SelectSubset<T, CourseCategoryCreateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends CourseCategoryCreateManyArgs>(args?: SelectSubset<T, CourseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends CourseCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends CourseCategoryDeleteArgs>(args: SelectSubset<T, CourseCategoryDeleteArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends CourseCategoryUpdateArgs>(args: SelectSubset<T, CourseCategoryUpdateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends CourseCategoryDeleteManyArgs>(args?: SelectSubset<T, CourseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends CourseCategoryUpdateManyArgs>(args: SelectSubset<T, CourseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends CourseCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends CourseCategoryUpsertArgs>(args: SelectSubset<T, CourseCategoryUpsertArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends CourseCategoryAggregateArgs>(args: Subset<T, CourseCategoryAggregateArgs>): Prisma.PrismaPromise<GetCourseCategoryAggregateType<T>>

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
    >(args: SubsetIntersection<T, CourseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__CourseCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends CourseCategory$coursesArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategory$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CourseCategory model
   */
  interface CourseCategoryFieldRefs {
    readonly id: FieldRef<"CourseCategory", 'String'>
    readonly name: FieldRef<"CourseCategory", 'String'>
    readonly isEnabled: FieldRef<"CourseCategory", 'Boolean'>
    readonly createdAt: FieldRef<"CourseCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseCategory findUnique
   */
  export type CourseCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findUniqueOrThrow
   */
  export type CourseCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findFirst
   */
  export type CourseCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findFirstOrThrow
   */
  export type CourseCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findMany
   */
  export type CourseCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategories to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory create
   */
  export type CourseCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseCategory.
     */
    data: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
  }

  /**
   * CourseCategory createMany
   */
  export type CourseCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory createManyAndReturn
   */
  export type CourseCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory update
   */
  export type CourseCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseCategory.
     */
    data: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
    /**
     * Choose, which CourseCategory to update.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory updateMany
   */
  export type CourseCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory updateManyAndReturn
   */
  export type CourseCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory upsert
   */
  export type CourseCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseCategory to update in case it exists.
     */
    where: CourseCategoryWhereUniqueInput
    /**
     * In case the CourseCategory found by the `where` argument doesn't exist, create a new CourseCategory with this data.
     */
    create: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
    /**
     * In case the CourseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
  }

  /**
   * CourseCategory delete
   */
  export type CourseCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter which CourseCategory to delete.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory deleteMany
   */
  export type CourseCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategories to delete
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to delete.
     */
    limit?: number
  }

  /**
   * CourseCategory.courses
   */
  export type CourseCategory$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * CourseCategory without action
   */
  export type CourseCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    coverImageId: number | null
    price: number | null
    videoUrlId: number | null
    previewDuration: number | null
    duration: number | null
    studentCount: number | null
  }

  export type CourseSumAggregateOutputType = {
    coverImageId: number | null
    price: number | null
    videoUrlId: number | null
    previewDuration: number | null
    duration: number | null
    studentCount: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    coverImageId: number | null
    description: string | null
    price: number | null
    type: $Enums.CourseType | null
    videoUrlId: number | null
    previewDuration: number | null
    duration: number | null
    studentCount: number | null
    isPublished: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coverImageId: number | null
    description: string | null
    price: number | null
    type: $Enums.CourseType | null
    videoUrlId: number | null
    previewDuration: number | null
    duration: number | null
    studentCount: number | null
    isPublished: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    coverImageId: number
    description: number
    price: number
    type: number
    videoUrlId: number
    previewDuration: number
    duration: number
    studentCount: number
    isPublished: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    coverImageId?: true
    price?: true
    videoUrlId?: true
    previewDuration?: true
    duration?: true
    studentCount?: true
  }

  export type CourseSumAggregateInputType = {
    coverImageId?: true
    price?: true
    videoUrlId?: true
    previewDuration?: true
    duration?: true
    studentCount?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    coverImageId?: true
    description?: true
    price?: true
    type?: true
    videoUrlId?: true
    previewDuration?: true
    duration?: true
    studentCount?: true
    isPublished?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    coverImageId?: true
    description?: true
    price?: true
    type?: true
    videoUrlId?: true
    previewDuration?: true
    duration?: true
    studentCount?: true
    isPublished?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    coverImageId?: true
    description?: true
    price?: true
    type?: true
    videoUrlId?: true
    previewDuration?: true
    duration?: true
    studentCount?: true
    isPublished?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    coverImageId: number
    description: string | null
    price: number
    type: $Enums.CourseType
    videoUrlId: number
    previewDuration: number
    duration: number | null
    studentCount: number | null
    isPublished: boolean
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImageId?: boolean
    description?: boolean
    price?: boolean
    type?: boolean
    videoUrlId?: boolean
    previewDuration?: boolean
    duration?: boolean
    studentCount?: boolean
    isPublished?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImageId?: boolean
    description?: boolean
    price?: boolean
    type?: boolean
    videoUrlId?: boolean
    previewDuration?: boolean
    duration?: boolean
    studentCount?: boolean
    isPublished?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImageId?: boolean
    description?: boolean
    price?: boolean
    type?: boolean
    videoUrlId?: boolean
    previewDuration?: boolean
    duration?: boolean
    studentCount?: boolean
    isPublished?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    coverImageId?: boolean
    description?: boolean
    price?: boolean
    type?: boolean
    videoUrlId?: boolean
    previewDuration?: boolean
    duration?: boolean
    studentCount?: boolean
    isPublished?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coverImageId" | "description" | "price" | "type" | "videoUrlId" | "previewDuration" | "duration" | "studentCount" | "isPublished" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverImage?: boolean | FileDefaultArgs<ExtArgs>
    videoUrl?: boolean | FileDefaultArgs<ExtArgs>
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      /**
       * 封面图OSS地址
       */
      coverImage: Prisma.$FilePayload<ExtArgs>
      /**
       * 完整视频OSS地址
       */
      videoUrl: Prisma.$FilePayload<ExtArgs>
      /**
       * 关联分类
       */
      category: Prisma.$CourseCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * 课程ID
       */
      id: string
      /**
       * 课程名称
       */
      name: string
      /**
       * 封面图ID
       */
      coverImageId: number
      /**
       * 课程简介
       */
      description: string | null
      /**
       * 课程价格（元）
       */
      price: number
      /**
       * 课程类型
       */
      type: $Enums.CourseType
      /**
       * 视频ID
       */
      videoUrlId: number
      /**
       * 试看时长（秒），默认5分钟
       */
      previewDuration: number
      /**
       * 视频总时长（秒）
       */
      duration: number | null
      /**
       * 学习人数
       */
      studentCount: number | null
      /**
       * 是否上架
       */
      isPublished: boolean
      /**
       * 分类ID
       */
      categoryId: string
      /**
       * 创建时间
       */
      createdAt: Date
      /**
       * 更新时间
       */
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
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
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coverImage<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videoUrl<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CourseCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategoryDefaultArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly coverImageId: FieldRef<"Course", 'Int'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly type: FieldRef<"Course", 'CourseType'>
    readonly videoUrlId: FieldRef<"Course", 'Int'>
    readonly previewDuration: FieldRef<"Course", 'Int'>
    readonly duration: FieldRef<"Course", 'Int'>
    readonly studentCount: FieldRef<"Course", 'Int'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
    readonly categoryId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeAvgAggregateOutputType = {
    hourCount: number | null
    dayCount: number | null
  }

  export type VerificationCodeSumAggregateOutputType = {
    hourCount: number | null
    dayCount: number | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expireAt: Date | null
    hourCount: number | null
    dayCount: number | null
    createdAt: Date | null
    type: string | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expireAt: Date | null
    hourCount: number | null
    dayCount: number | null
    createdAt: Date | null
    type: string | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    phone: number
    code: number
    expireAt: number
    hourCount: number
    dayCount: number
    createdAt: number
    type: number
    _all: number
  }


  export type VerificationCodeAvgAggregateInputType = {
    hourCount?: true
    dayCount?: true
  }

  export type VerificationCodeSumAggregateInputType = {
    hourCount?: true
    dayCount?: true
  }

  export type VerificationCodeMinAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expireAt?: true
    hourCount?: true
    dayCount?: true
    createdAt?: true
    type?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expireAt?: true
    hourCount?: true
    dayCount?: true
    createdAt?: true
    type?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expireAt?: true
    hourCount?: true
    dayCount?: true
    createdAt?: true
    type?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _avg?: VerificationCodeAvgAggregateInputType
    _sum?: VerificationCodeSumAggregateInputType
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    phone: string
    code: string
    expireAt: Date
    hourCount: number
    dayCount: number
    createdAt: Date
    type: string
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expireAt?: boolean
    hourCount?: boolean
    dayCount?: boolean
    createdAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expireAt?: boolean
    hourCount?: boolean
    dayCount?: boolean
    createdAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expireAt?: boolean
    hourCount?: boolean
    dayCount?: boolean
    createdAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    phone?: boolean
    code?: boolean
    expireAt?: boolean
    hourCount?: boolean
    dayCount?: boolean
    createdAt?: boolean
    type?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "code" | "expireAt" | "hourCount" | "dayCount" | "createdAt" | "type", ExtArgs["result"]["verificationCode"]>

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * 主键，使用 cuid 生成
       */
      id: string
      /**
       * 手机号
       */
      phone: string
      /**
       * 验证码内容
       */
      code: string
      /**
       * 过期时间
       */
      expireAt: Date
      /**
       * 小时内发送次数（限流用）
       */
      hourCount: number
      /**
       * 天内发送次数（限流用）
       */
      dayCount: number
      /**
       * 创建时间
       */
      createdAt: Date
      type: string
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly phone: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly expireAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly hourCount: FieldRef<"VerificationCode", 'Int'>
    readonly dayCount: FieldRef<"VerificationCode", 'Int'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly type: FieldRef<"VerificationCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
  }


  /**
   * Model TempFile
   */

  export type AggregateTempFile = {
    _count: TempFileCountAggregateOutputType | null
    _avg: TempFileAvgAggregateOutputType | null
    _sum: TempFileSumAggregateOutputType | null
    _min: TempFileMinAggregateOutputType | null
    _max: TempFileMaxAggregateOutputType | null
  }

  export type TempFileAvgAggregateOutputType = {
    id: number | null
  }

  export type TempFileSumAggregateOutputType = {
    id: number | null
  }

  export type TempFileMinAggregateOutputType = {
    id: number | null
    fileKey: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TempFileMaxAggregateOutputType = {
    id: number | null
    fileKey: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TempFileCountAggregateOutputType = {
    id: number
    fileKey: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type TempFileAvgAggregateInputType = {
    id?: true
  }

  export type TempFileSumAggregateInputType = {
    id?: true
  }

  export type TempFileMinAggregateInputType = {
    id?: true
    fileKey?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TempFileMaxAggregateInputType = {
    id?: true
    fileKey?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TempFileCountAggregateInputType = {
    id?: true
    fileKey?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type TempFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempFile to aggregate.
     */
    where?: TempFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempFiles to fetch.
     */
    orderBy?: TempFileOrderByWithRelationInput | TempFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempFiles
    **/
    _count?: true | TempFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempFileMaxAggregateInputType
  }

  export type GetTempFileAggregateType<T extends TempFileAggregateArgs> = {
        [P in keyof T & keyof AggregateTempFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempFile[P]>
      : GetScalarType<T[P], AggregateTempFile[P]>
  }




  export type TempFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempFileWhereInput
    orderBy?: TempFileOrderByWithAggregationInput | TempFileOrderByWithAggregationInput[]
    by: TempFileScalarFieldEnum[] | TempFileScalarFieldEnum
    having?: TempFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempFileCountAggregateInputType | true
    _avg?: TempFileAvgAggregateInputType
    _sum?: TempFileSumAggregateInputType
    _min?: TempFileMinAggregateInputType
    _max?: TempFileMaxAggregateInputType
  }

  export type TempFileGroupByOutputType = {
    id: number
    fileKey: string
    createdAt: Date
    expiresAt: Date
    _count: TempFileCountAggregateOutputType | null
    _avg: TempFileAvgAggregateOutputType | null
    _sum: TempFileSumAggregateOutputType | null
    _min: TempFileMinAggregateOutputType | null
    _max: TempFileMaxAggregateOutputType | null
  }

  type GetTempFileGroupByPayload<T extends TempFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempFileGroupByOutputType[P]>
            : GetScalarType<T[P], TempFileGroupByOutputType[P]>
        }
      >
    >


  export type TempFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["tempFile"]>

  export type TempFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["tempFile"]>

  export type TempFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["tempFile"]>

  export type TempFileSelectScalar = {
    id?: boolean
    fileKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type TempFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileKey" | "createdAt" | "expiresAt", ExtArgs["result"]["tempFile"]>

  export type $TempFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileKey: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["tempFile"]>
    composites: {}
  }

  type TempFileGetPayload<S extends boolean | null | undefined | TempFileDefaultArgs> = $Result.GetResult<Prisma.$TempFilePayload, S>

  type TempFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempFileCountAggregateInputType | true
    }

  export interface TempFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempFile'], meta: { name: 'TempFile' } }
    /**
     * Find zero or one TempFile that matches the filter.
     * @param {TempFileFindUniqueArgs} args - Arguments to find a TempFile
     * @example
     * // Get one TempFile
     * const tempFile = await prisma.tempFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempFileFindUniqueArgs>(args: SelectSubset<T, TempFileFindUniqueArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempFileFindUniqueOrThrowArgs} args - Arguments to find a TempFile
     * @example
     * // Get one TempFile
     * const tempFile = await prisma.tempFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempFileFindUniqueOrThrowArgs>(args: SelectSubset<T, TempFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileFindFirstArgs} args - Arguments to find a TempFile
     * @example
     * // Get one TempFile
     * const tempFile = await prisma.tempFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempFileFindFirstArgs>(args?: SelectSubset<T, TempFileFindFirstArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileFindFirstOrThrowArgs} args - Arguments to find a TempFile
     * @example
     * // Get one TempFile
     * const tempFile = await prisma.tempFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempFileFindFirstOrThrowArgs>(args?: SelectSubset<T, TempFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempFiles
     * const tempFiles = await prisma.tempFile.findMany()
     * 
     * // Get first 10 TempFiles
     * const tempFiles = await prisma.tempFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempFileWithIdOnly = await prisma.tempFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempFileFindManyArgs>(args?: SelectSubset<T, TempFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempFile.
     * @param {TempFileCreateArgs} args - Arguments to create a TempFile.
     * @example
     * // Create one TempFile
     * const TempFile = await prisma.tempFile.create({
     *   data: {
     *     // ... data to create a TempFile
     *   }
     * })
     * 
     */
    create<T extends TempFileCreateArgs>(args: SelectSubset<T, TempFileCreateArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempFiles.
     * @param {TempFileCreateManyArgs} args - Arguments to create many TempFiles.
     * @example
     * // Create many TempFiles
     * const tempFile = await prisma.tempFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempFileCreateManyArgs>(args?: SelectSubset<T, TempFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempFiles and returns the data saved in the database.
     * @param {TempFileCreateManyAndReturnArgs} args - Arguments to create many TempFiles.
     * @example
     * // Create many TempFiles
     * const tempFile = await prisma.tempFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempFiles and only return the `id`
     * const tempFileWithIdOnly = await prisma.tempFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempFileCreateManyAndReturnArgs>(args?: SelectSubset<T, TempFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempFile.
     * @param {TempFileDeleteArgs} args - Arguments to delete one TempFile.
     * @example
     * // Delete one TempFile
     * const TempFile = await prisma.tempFile.delete({
     *   where: {
     *     // ... filter to delete one TempFile
     *   }
     * })
     * 
     */
    delete<T extends TempFileDeleteArgs>(args: SelectSubset<T, TempFileDeleteArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempFile.
     * @param {TempFileUpdateArgs} args - Arguments to update one TempFile.
     * @example
     * // Update one TempFile
     * const tempFile = await prisma.tempFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempFileUpdateArgs>(args: SelectSubset<T, TempFileUpdateArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempFiles.
     * @param {TempFileDeleteManyArgs} args - Arguments to filter TempFiles to delete.
     * @example
     * // Delete a few TempFiles
     * const { count } = await prisma.tempFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempFileDeleteManyArgs>(args?: SelectSubset<T, TempFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempFiles
     * const tempFile = await prisma.tempFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempFileUpdateManyArgs>(args: SelectSubset<T, TempFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempFiles and returns the data updated in the database.
     * @param {TempFileUpdateManyAndReturnArgs} args - Arguments to update many TempFiles.
     * @example
     * // Update many TempFiles
     * const tempFile = await prisma.tempFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempFiles and only return the `id`
     * const tempFileWithIdOnly = await prisma.tempFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TempFileUpdateManyAndReturnArgs>(args: SelectSubset<T, TempFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempFile.
     * @param {TempFileUpsertArgs} args - Arguments to update or create a TempFile.
     * @example
     * // Update or create a TempFile
     * const tempFile = await prisma.tempFile.upsert({
     *   create: {
     *     // ... data to create a TempFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempFile we want to update
     *   }
     * })
     */
    upsert<T extends TempFileUpsertArgs>(args: SelectSubset<T, TempFileUpsertArgs<ExtArgs>>): Prisma__TempFileClient<$Result.GetResult<Prisma.$TempFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileCountArgs} args - Arguments to filter TempFiles to count.
     * @example
     * // Count the number of TempFiles
     * const count = await prisma.tempFile.count({
     *   where: {
     *     // ... the filter for the TempFiles we want to count
     *   }
     * })
    **/
    count<T extends TempFileCountArgs>(
      args?: Subset<T, TempFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempFileAggregateArgs>(args: Subset<T, TempFileAggregateArgs>): Prisma.PrismaPromise<GetTempFileAggregateType<T>>

    /**
     * Group by TempFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFileGroupByArgs} args - Group by arguments.
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
      T extends TempFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempFileGroupByArgs['orderBy'] }
        : { orderBy?: TempFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TempFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempFile model
   */
  readonly fields: TempFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TempFile model
   */
  interface TempFileFieldRefs {
    readonly id: FieldRef<"TempFile", 'Int'>
    readonly fileKey: FieldRef<"TempFile", 'String'>
    readonly createdAt: FieldRef<"TempFile", 'DateTime'>
    readonly expiresAt: FieldRef<"TempFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TempFile findUnique
   */
  export type TempFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter, which TempFile to fetch.
     */
    where: TempFileWhereUniqueInput
  }

  /**
   * TempFile findUniqueOrThrow
   */
  export type TempFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter, which TempFile to fetch.
     */
    where: TempFileWhereUniqueInput
  }

  /**
   * TempFile findFirst
   */
  export type TempFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter, which TempFile to fetch.
     */
    where?: TempFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempFiles to fetch.
     */
    orderBy?: TempFileOrderByWithRelationInput | TempFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempFiles.
     */
    cursor?: TempFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempFiles.
     */
    distinct?: TempFileScalarFieldEnum | TempFileScalarFieldEnum[]
  }

  /**
   * TempFile findFirstOrThrow
   */
  export type TempFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter, which TempFile to fetch.
     */
    where?: TempFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempFiles to fetch.
     */
    orderBy?: TempFileOrderByWithRelationInput | TempFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempFiles.
     */
    cursor?: TempFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempFiles.
     */
    distinct?: TempFileScalarFieldEnum | TempFileScalarFieldEnum[]
  }

  /**
   * TempFile findMany
   */
  export type TempFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter, which TempFiles to fetch.
     */
    where?: TempFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempFiles to fetch.
     */
    orderBy?: TempFileOrderByWithRelationInput | TempFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempFiles.
     */
    cursor?: TempFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempFiles.
     */
    skip?: number
    distinct?: TempFileScalarFieldEnum | TempFileScalarFieldEnum[]
  }

  /**
   * TempFile create
   */
  export type TempFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * The data needed to create a TempFile.
     */
    data: XOR<TempFileCreateInput, TempFileUncheckedCreateInput>
  }

  /**
   * TempFile createMany
   */
  export type TempFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempFiles.
     */
    data: TempFileCreateManyInput | TempFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempFile createManyAndReturn
   */
  export type TempFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * The data used to create many TempFiles.
     */
    data: TempFileCreateManyInput | TempFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempFile update
   */
  export type TempFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * The data needed to update a TempFile.
     */
    data: XOR<TempFileUpdateInput, TempFileUncheckedUpdateInput>
    /**
     * Choose, which TempFile to update.
     */
    where: TempFileWhereUniqueInput
  }

  /**
   * TempFile updateMany
   */
  export type TempFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempFiles.
     */
    data: XOR<TempFileUpdateManyMutationInput, TempFileUncheckedUpdateManyInput>
    /**
     * Filter which TempFiles to update
     */
    where?: TempFileWhereInput
    /**
     * Limit how many TempFiles to update.
     */
    limit?: number
  }

  /**
   * TempFile updateManyAndReturn
   */
  export type TempFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * The data used to update TempFiles.
     */
    data: XOR<TempFileUpdateManyMutationInput, TempFileUncheckedUpdateManyInput>
    /**
     * Filter which TempFiles to update
     */
    where?: TempFileWhereInput
    /**
     * Limit how many TempFiles to update.
     */
    limit?: number
  }

  /**
   * TempFile upsert
   */
  export type TempFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * The filter to search for the TempFile to update in case it exists.
     */
    where: TempFileWhereUniqueInput
    /**
     * In case the TempFile found by the `where` argument doesn't exist, create a new TempFile with this data.
     */
    create: XOR<TempFileCreateInput, TempFileUncheckedCreateInput>
    /**
     * In case the TempFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempFileUpdateInput, TempFileUncheckedUpdateInput>
  }

  /**
   * TempFile delete
   */
  export type TempFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
    /**
     * Filter which TempFile to delete.
     */
    where: TempFileWhereUniqueInput
  }

  /**
   * TempFile deleteMany
   */
  export type TempFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempFiles to delete
     */
    where?: TempFileWhereInput
    /**
     * Limit how many TempFiles to delete.
     */
    limit?: number
  }

  /**
   * TempFile without action
   */
  export type TempFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempFile
     */
    select?: TempFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempFile
     */
    omit?: TempFileOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: number | null
    payAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: number | null
    payAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNo: string | null
    userId: string | null
    totalAmount: number | null
    payAmount: number | null
    status: $Enums.OrderStatus | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    paidAt: Date | null
    shippedAt: Date | null
    completedAt: Date | null
    remark: string | null
    trackingNo: string | null
    logisticsCompany: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNo: string | null
    userId: string | null
    totalAmount: number | null
    payAmount: number | null
    status: $Enums.OrderStatus | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    paidAt: Date | null
    shippedAt: Date | null
    completedAt: Date | null
    remark: string | null
    trackingNo: string | null
    logisticsCompany: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNo: number
    userId: number
    totalAmount: number
    payAmount: number
    status: number
    receiverName: number
    receiverPhone: number
    receiverAddress: number
    paidAt: number
    shippedAt: number
    completedAt: number
    remark: number
    trackingNo: number
    logisticsCompany: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    payAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    payAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNo?: true
    userId?: true
    totalAmount?: true
    payAmount?: true
    status?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    paidAt?: true
    shippedAt?: true
    completedAt?: true
    remark?: true
    trackingNo?: true
    logisticsCompany?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNo?: true
    userId?: true
    totalAmount?: true
    payAmount?: true
    status?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    paidAt?: true
    shippedAt?: true
    completedAt?: true
    remark?: true
    trackingNo?: true
    logisticsCompany?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNo?: true
    userId?: true
    totalAmount?: true
    payAmount?: true
    status?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    paidAt?: true
    shippedAt?: true
    completedAt?: true
    remark?: true
    trackingNo?: true
    logisticsCompany?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNo: string
    userId: string
    totalAmount: number
    payAmount: number
    status: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt: Date | null
    shippedAt: Date | null
    completedAt: Date | null
    remark: string | null
    trackingNo: string | null
    logisticsCompany: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    userId?: boolean
    totalAmount?: boolean
    payAmount?: boolean
    status?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    paidAt?: boolean
    shippedAt?: boolean
    completedAt?: boolean
    remark?: boolean
    trackingNo?: boolean
    logisticsCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    userId?: boolean
    totalAmount?: boolean
    payAmount?: boolean
    status?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    paidAt?: boolean
    shippedAt?: boolean
    completedAt?: boolean
    remark?: boolean
    trackingNo?: boolean
    logisticsCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    userId?: boolean
    totalAmount?: boolean
    payAmount?: boolean
    status?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    paidAt?: boolean
    shippedAt?: boolean
    completedAt?: boolean
    remark?: boolean
    trackingNo?: boolean
    logisticsCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNo?: boolean
    userId?: boolean
    totalAmount?: boolean
    payAmount?: boolean
    status?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    paidAt?: boolean
    shippedAt?: boolean
    completedAt?: boolean
    remark?: boolean
    trackingNo?: boolean
    logisticsCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNo" | "userId" | "totalAmount" | "payAmount" | "status" | "receiverName" | "receiverPhone" | "receiverAddress" | "paidAt" | "shippedAt" | "completedAt" | "remark" | "trackingNo" | "logisticsCompany" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      /**
       * 关联用户
       */
      user: Prisma.$UserPayload<ExtArgs>
      /**
       * 订单项
       */
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * 订单编号（业务可展示的编号）
       */
      orderNo: string
      /**
       * 下单用户ID
       */
      userId: string
      /**
       * 订单总金额
       */
      totalAmount: number
      /**
       * 实付金额
       */
      payAmount: number
      /**
       * 订单状态
       */
      status: $Enums.OrderStatus
      /**
       * 收货人信息
       */
      receiverName: string
      receiverPhone: string
      receiverAddress: string
      /**
       * 支付时间
       */
      paidAt: Date | null
      /**
       * 发货时间
       */
      shippedAt: Date | null
      /**
       * 完成时间
       */
      completedAt: Date | null
      /**
       * 订单备注
       */
      remark: string | null
      /**
       * 物流单号
       */
      trackingNo: string | null
      /**
       * 物流公司
       */
      logisticsCompany: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNo: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly payAmount: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly receiverName: FieldRef<"Order", 'String'>
    readonly receiverPhone: FieldRef<"Order", 'String'>
    readonly receiverAddress: FieldRef<"Order", 'String'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly shippedAt: FieldRef<"Order", 'DateTime'>
    readonly completedAt: FieldRef<"Order", 'DateTime'>
    readonly remark: FieldRef<"Order", 'String'>
    readonly trackingNo: FieldRef<"Order", 'String'>
    readonly logisticsCompany: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    productName: string | null
    productImage: string | null
    price: number | null
    quantity: number | null
    subtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    productName: string | null
    productImage: string | null
    price: number | null
    quantity: number | null
    subtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    productName: number
    productImage: number
    price: number
    quantity: number
    subtotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    price?: true
    quantity?: true
    subtotal?: true
  }

  export type OrderItemSumAggregateInputType = {
    price?: true
    quantity?: true
    subtotal?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    productImage?: true
    price?: true
    quantity?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    productImage?: true
    price?: true
    quantity?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    productImage?: true
    price?: true
    quantity?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    productName: string
    productImage: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    price?: boolean
    quantity?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    price?: boolean
    quantity?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    price?: boolean
    quantity?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    price?: boolean
    quantity?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "productName" | "productImage" | "price" | "quantity" | "subtotal" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      /**
       * 关联订单
       */
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * 订单ID
       */
      orderId: string
      /**
       * 商品ID（下单时快照）
       */
      productId: string
      /**
       * 商品名称（下单时快照，防止商品后续改名）
       */
      productName: string
      /**
       * 商品图片快照
       */
      productImage: string | null
      /**
       * 购买时单价
       */
      price: number
      /**
       * 购买数量
       */
      quantity: number
      /**
       * 该商品小计
       */
      subtotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly productName: FieldRef<"OrderItem", 'String'>
    readonly productImage: FieldRef<"OrderItem", 'String'>
    readonly price: FieldRef<"OrderItem", 'Float'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly subtotal: FieldRef<"OrderItem", 'Float'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    province: string | null
    city: string | null
    district: string | null
    detail: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    province: string | null
    city: string | null
    district: string | null
    detail: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    phone: number
    province: number
    city: number
    district: number
    detail: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAddressMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    province?: true
    city?: true
    district?: true
    detail?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    province?: true
    city?: true
    district?: true
    detail?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    province?: true
    city?: true
    district?: true
    detail?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    id: string
    userId: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserAddressCountAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    detail?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    detail?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    detail?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    detail?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "phone" | "province" | "city" | "district" | "detail" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["userAddress"]>
  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * 关联用户
       */
      userId: string
      /**
       * 收货人
       */
      name: string
      /**
       * 手机号
       */
      phone: string
      /**
       * 省市区
       */
      province: string
      city: string
      district: string
      /**
       * 详细地址
       */
      detail: string
      /**
       * 是否默认地址
       */
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }

  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressFindUniqueArgs>(args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressFindFirstArgs>(args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddressFindManyArgs>(args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
     */
    create<T extends UserAddressCreateArgs>(args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAddresses.
     * @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressCreateManyArgs>(args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAddresses and returns the data saved in the database.
     * @param {UserAddressCreateManyAndReturnArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
     */
    delete<T extends UserAddressDeleteArgs>(args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressUpdateArgs>(args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressDeleteManyArgs>(args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressUpdateManyArgs>(args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses and returns the data updated in the database.
     * @param {UserAddressUpdateManyAndReturnArgs} args - Arguments to update many UserAddresses.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressUpsertArgs>(args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
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
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAddress model
   */
  interface UserAddressFieldRefs {
    readonly id: FieldRef<"UserAddress", 'String'>
    readonly userId: FieldRef<"UserAddress", 'String'>
    readonly name: FieldRef<"UserAddress", 'String'>
    readonly phone: FieldRef<"UserAddress", 'String'>
    readonly province: FieldRef<"UserAddress", 'String'>
    readonly city: FieldRef<"UserAddress", 'String'>
    readonly district: FieldRef<"UserAddress", 'String'>
    readonly detail: FieldRef<"UserAddress", 'String'>
    readonly isDefault: FieldRef<"UserAddress", 'Boolean'>
    readonly createdAt: FieldRef<"UserAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }

  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddress createManyAndReturn
   */
  export type UserAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
  }

  /**
   * UserAddress updateManyAndReturn
   */
  export type UserAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }

  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to delete.
     */
    limit?: number
  }

  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
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
    username: 'username',
    id: 'id',
    name: 'name',
    phone: 'phone',
    roles: 'roles',
    status: 'status',
    rejectReason: 'rejectReason',
    avatarFileId: 'avatarFileId',
    email: 'email',
    gender: 'gender',
    idType: 'idType',
    idNumber: 'idNumber',
    entity: 'entity',
    entityAddress: 'entityAddress',
    cityScope: 'cityScope',
    competitionScopes: 'competitionScopes',
    passwordHash: 'passwordHash',
    powerOfAttorney: 'powerOfAttorney',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NormalProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NormalProductCategoryScalarFieldEnum = (typeof NormalProductCategoryScalarFieldEnum)[keyof typeof NormalProductCategoryScalarFieldEnum]


  export const NormalProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    discountPrice: 'discountPrice',
    stock: 'stock',
    detailImageId: 'detailImageId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NormalProductScalarFieldEnum = (typeof NormalProductScalarFieldEnum)[keyof typeof NormalProductScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    fileKey: 'fileKey',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    meta: 'meta'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const CourseCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseCategoryScalarFieldEnum = (typeof CourseCategoryScalarFieldEnum)[keyof typeof CourseCategoryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coverImageId: 'coverImageId',
    description: 'description',
    price: 'price',
    type: 'type',
    videoUrlId: 'videoUrlId',
    previewDuration: 'previewDuration',
    duration: 'duration',
    studentCount: 'studentCount',
    isPublished: 'isPublished',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    code: 'code',
    expireAt: 'expireAt',
    hourCount: 'hourCount',
    dayCount: 'dayCount',
    createdAt: 'createdAt',
    type: 'type'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const TempFileScalarFieldEnum: {
    id: 'id',
    fileKey: 'fileKey',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type TempFileScalarFieldEnum = (typeof TempFileScalarFieldEnum)[keyof typeof TempFileScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNo: 'orderNo',
    userId: 'userId',
    totalAmount: 'totalAmount',
    payAmount: 'payAmount',
    status: 'status',
    receiverName: 'receiverName',
    receiverPhone: 'receiverPhone',
    receiverAddress: 'receiverAddress',
    paidAt: 'paidAt',
    shippedAt: 'shippedAt',
    completedAt: 'completedAt',
    remark: 'remark',
    trackingNo: 'trackingNo',
    logisticsCompany: 'logisticsCompany',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    productName: 'productName',
    productImage: 'productImage',
    price: 'price',
    quantity: 'quantity',
    subtotal: 'subtotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    phone: 'phone',
    province: 'province',
    city: 'city',
    district: 'district',
    detail: 'detail',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'CourseType'
   */
  export type EnumCourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseType'>
    


  /**
   * Reference to a field of type 'CourseType[]'
   */
  export type ListEnumCourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseType[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    roles?: EnumRoleNullableListFilter<"User">
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    rejectReason?: StringNullableFilter<"User"> | string | null
    avatarFileId?: IntNullableFilter<"User"> | number | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    idType?: StringNullableFilter<"User"> | string | null
    idNumber?: StringNullableFilter<"User"> | string | null
    entity?: StringNullableFilter<"User"> | string | null
    entityAddress?: StringNullableFilter<"User"> | string | null
    cityScope?: StringNullableFilter<"User"> | string | null
    competitionScopes?: StringNullableListFilter<"User">
    passwordHash?: StringNullableFilter<"User"> | string | null
    powerOfAttorney?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    avatarUrl?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    orders?: OrderListRelationFilter
    addresses?: UserAddressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    username?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    rejectReason?: SortOrderInput | SortOrder
    avatarFileId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    entity?: SortOrderInput | SortOrder
    entityAddress?: SortOrderInput | SortOrder
    cityScope?: SortOrderInput | SortOrder
    competitionScopes?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    powerOfAttorney?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatarUrl?: FileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    addresses?: UserAddressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    roles?: EnumRoleNullableListFilter<"User">
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    rejectReason?: StringNullableFilter<"User"> | string | null
    avatarFileId?: IntNullableFilter<"User"> | number | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    idType?: StringNullableFilter<"User"> | string | null
    idNumber?: StringNullableFilter<"User"> | string | null
    entity?: StringNullableFilter<"User"> | string | null
    entityAddress?: StringNullableFilter<"User"> | string | null
    cityScope?: StringNullableFilter<"User"> | string | null
    competitionScopes?: StringNullableListFilter<"User">
    passwordHash?: StringNullableFilter<"User"> | string | null
    powerOfAttorney?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    avatarUrl?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    orders?: OrderListRelationFilter
    addresses?: UserAddressListRelationFilter
  }, "id" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    username?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    rejectReason?: SortOrderInput | SortOrder
    avatarFileId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    entity?: SortOrderInput | SortOrder
    entityAddress?: SortOrderInput | SortOrder
    cityScope?: SortOrderInput | SortOrder
    competitionScopes?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    powerOfAttorney?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    roles?: EnumRoleNullableListFilter<"User">
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    rejectReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarFileId?: IntNullableWithAggregatesFilter<"User"> | number | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    idType?: StringNullableWithAggregatesFilter<"User"> | string | null
    idNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    entity?: StringNullableWithAggregatesFilter<"User"> | string | null
    entityAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    cityScope?: StringNullableWithAggregatesFilter<"User"> | string | null
    competitionScopes?: StringNullableListFilter<"User">
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    powerOfAttorney?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NormalProductCategoryWhereInput = {
    AND?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[]
    OR?: NormalProductCategoryWhereInput[]
    NOT?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[]
    id?: StringFilter<"NormalProductCategory"> | string
    name?: StringFilter<"NormalProductCategory"> | string
    isEnabled?: BoolFilter<"NormalProductCategory"> | boolean
    createdAt?: DateTimeFilter<"NormalProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"NormalProductCategory"> | Date | string
    normalProducts?: NormalProductListRelationFilter
  }

  export type NormalProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    normalProducts?: NormalProductOrderByRelationAggregateInput
  }

  export type NormalProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[]
    OR?: NormalProductCategoryWhereInput[]
    NOT?: NormalProductCategoryWhereInput | NormalProductCategoryWhereInput[]
    name?: StringFilter<"NormalProductCategory"> | string
    isEnabled?: BoolFilter<"NormalProductCategory"> | boolean
    createdAt?: DateTimeFilter<"NormalProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"NormalProductCategory"> | Date | string
    normalProducts?: NormalProductListRelationFilter
  }, "id">

  export type NormalProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NormalProductCategoryCountOrderByAggregateInput
    _max?: NormalProductCategoryMaxOrderByAggregateInput
    _min?: NormalProductCategoryMinOrderByAggregateInput
  }

  export type NormalProductCategoryScalarWhereWithAggregatesInput = {
    AND?: NormalProductCategoryScalarWhereWithAggregatesInput | NormalProductCategoryScalarWhereWithAggregatesInput[]
    OR?: NormalProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: NormalProductCategoryScalarWhereWithAggregatesInput | NormalProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NormalProductCategory"> | string
    name?: StringWithAggregatesFilter<"NormalProductCategory"> | string
    isEnabled?: BoolWithAggregatesFilter<"NormalProductCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NormalProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NormalProductCategory"> | Date | string
  }

  export type NormalProductWhereInput = {
    AND?: NormalProductWhereInput | NormalProductWhereInput[]
    OR?: NormalProductWhereInput[]
    NOT?: NormalProductWhereInput | NormalProductWhereInput[]
    id?: StringFilter<"NormalProduct"> | string
    name?: StringFilter<"NormalProduct"> | string
    description?: StringNullableFilter<"NormalProduct"> | string | null
    price?: FloatFilter<"NormalProduct"> | number
    discountPrice?: FloatNullableFilter<"NormalProduct"> | number | null
    stock?: IntFilter<"NormalProduct"> | number
    detailImageId?: IntNullableFilter<"NormalProduct"> | number | null
    categoryId?: StringFilter<"NormalProduct"> | string
    createdAt?: DateTimeFilter<"NormalProduct"> | Date | string
    updatedAt?: DateTimeFilter<"NormalProduct"> | Date | string
    galleryImages?: FileListRelationFilter
    detailImage?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    category?: XOR<NormalProductCategoryScalarRelationFilter, NormalProductCategoryWhereInput>
  }

  export type NormalProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    stock?: SortOrder
    detailImageId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    galleryImages?: FileOrderByRelationAggregateInput
    detailImage?: FileOrderByWithRelationInput
    category?: NormalProductCategoryOrderByWithRelationInput
  }

  export type NormalProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    detailImageId?: number
    AND?: NormalProductWhereInput | NormalProductWhereInput[]
    OR?: NormalProductWhereInput[]
    NOT?: NormalProductWhereInput | NormalProductWhereInput[]
    name?: StringFilter<"NormalProduct"> | string
    description?: StringNullableFilter<"NormalProduct"> | string | null
    price?: FloatFilter<"NormalProduct"> | number
    discountPrice?: FloatNullableFilter<"NormalProduct"> | number | null
    stock?: IntFilter<"NormalProduct"> | number
    categoryId?: StringFilter<"NormalProduct"> | string
    createdAt?: DateTimeFilter<"NormalProduct"> | Date | string
    updatedAt?: DateTimeFilter<"NormalProduct"> | Date | string
    galleryImages?: FileListRelationFilter
    detailImage?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    category?: XOR<NormalProductCategoryScalarRelationFilter, NormalProductCategoryWhereInput>
  }, "id" | "detailImageId">

  export type NormalProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    stock?: SortOrder
    detailImageId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NormalProductCountOrderByAggregateInput
    _avg?: NormalProductAvgOrderByAggregateInput
    _max?: NormalProductMaxOrderByAggregateInput
    _min?: NormalProductMinOrderByAggregateInput
    _sum?: NormalProductSumOrderByAggregateInput
  }

  export type NormalProductScalarWhereWithAggregatesInput = {
    AND?: NormalProductScalarWhereWithAggregatesInput | NormalProductScalarWhereWithAggregatesInput[]
    OR?: NormalProductScalarWhereWithAggregatesInput[]
    NOT?: NormalProductScalarWhereWithAggregatesInput | NormalProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NormalProduct"> | string
    name?: StringWithAggregatesFilter<"NormalProduct"> | string
    description?: StringNullableWithAggregatesFilter<"NormalProduct"> | string | null
    price?: FloatWithAggregatesFilter<"NormalProduct"> | number
    discountPrice?: FloatNullableWithAggregatesFilter<"NormalProduct"> | number | null
    stock?: IntWithAggregatesFilter<"NormalProduct"> | number
    detailImageId?: IntNullableWithAggregatesFilter<"NormalProduct"> | number | null
    categoryId?: StringWithAggregatesFilter<"NormalProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NormalProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NormalProduct"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    fileKey?: StringFilter<"File"> | string
    fileName?: StringNullableFilter<"File"> | string | null
    fileSize?: IntFilter<"File"> | number
    mimeType?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    meta?: JsonNullableFilter<"File">
    avatarUrl?: UserListRelationFilter
    galleryImages?: NormalProductListRelationFilter
    detailImage?: XOR<NormalProductNullableScalarRelationFilter, NormalProductWhereInput> | null
    coverImage?: CourseListRelationFilter
    videoUrl?: CourseListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    avatarUrl?: UserOrderByRelationAggregateInput
    galleryImages?: NormalProductOrderByRelationAggregateInput
    detailImage?: NormalProductOrderByWithRelationInput
    coverImage?: CourseOrderByRelationAggregateInput
    videoUrl?: CourseOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fileKey?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    fileName?: StringNullableFilter<"File"> | string | null
    fileSize?: IntFilter<"File"> | number
    mimeType?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    meta?: JsonNullableFilter<"File">
    avatarUrl?: UserListRelationFilter
    galleryImages?: NormalProductListRelationFilter
    detailImage?: XOR<NormalProductNullableScalarRelationFilter, NormalProductWhereInput> | null
    coverImage?: CourseListRelationFilter
    videoUrl?: CourseListRelationFilter
  }, "id" | "fileKey">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    fileKey?: StringWithAggregatesFilter<"File"> | string
    fileName?: StringNullableWithAggregatesFilter<"File"> | string | null
    fileSize?: IntWithAggregatesFilter<"File"> | number
    mimeType?: StringWithAggregatesFilter<"File"> | string
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
    meta?: JsonNullableWithAggregatesFilter<"File">
  }

  export type CourseCategoryWhereInput = {
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    id?: StringFilter<"CourseCategory"> | string
    name?: StringFilter<"CourseCategory"> | string
    isEnabled?: BoolFilter<"CourseCategory"> | boolean
    createdAt?: DateTimeFilter<"CourseCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CourseCategory"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type CourseCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type CourseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    name?: StringFilter<"CourseCategory"> | string
    isEnabled?: BoolFilter<"CourseCategory"> | boolean
    createdAt?: DateTimeFilter<"CourseCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CourseCategory"> | Date | string
    courses?: CourseListRelationFilter
  }, "id">

  export type CourseCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCategoryCountOrderByAggregateInput
    _max?: CourseCategoryMaxOrderByAggregateInput
    _min?: CourseCategoryMinOrderByAggregateInput
  }

  export type CourseCategoryScalarWhereWithAggregatesInput = {
    AND?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    OR?: CourseCategoryScalarWhereWithAggregatesInput[]
    NOT?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseCategory"> | string
    name?: StringWithAggregatesFilter<"CourseCategory"> | string
    isEnabled?: BoolWithAggregatesFilter<"CourseCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CourseCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseCategory"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    coverImageId?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    videoUrlId?: IntFilter<"Course"> | number
    previewDuration?: IntFilter<"Course"> | number
    duration?: IntNullableFilter<"Course"> | number | null
    studentCount?: IntNullableFilter<"Course"> | number | null
    isPublished?: BoolFilter<"Course"> | boolean
    categoryId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    coverImage?: XOR<FileScalarRelationFilter, FileWhereInput>
    videoUrl?: XOR<FileScalarRelationFilter, FileWhereInput>
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageId?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    type?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coverImage?: FileOrderByWithRelationInput
    videoUrl?: FileOrderByWithRelationInput
    category?: CourseCategoryOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    coverImageId?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    videoUrlId?: IntFilter<"Course"> | number
    previewDuration?: IntFilter<"Course"> | number
    duration?: IntNullableFilter<"Course"> | number | null
    studentCount?: IntNullableFilter<"Course"> | number | null
    isPublished?: BoolFilter<"Course"> | boolean
    categoryId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    coverImage?: XOR<FileScalarRelationFilter, FileWhereInput>
    videoUrl?: XOR<FileScalarRelationFilter, FileWhereInput>
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageId?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    type?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    coverImageId?: IntWithAggregatesFilter<"Course"> | number
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    price?: FloatWithAggregatesFilter<"Course"> | number
    type?: EnumCourseTypeWithAggregatesFilter<"Course"> | $Enums.CourseType
    videoUrlId?: IntWithAggregatesFilter<"Course"> | number
    previewDuration?: IntWithAggregatesFilter<"Course"> | number
    duration?: IntNullableWithAggregatesFilter<"Course"> | number | null
    studentCount?: IntNullableWithAggregatesFilter<"Course"> | number | null
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
    categoryId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    phone?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expireAt?: DateTimeFilter<"VerificationCode"> | Date | string
    hourCount?: IntFilter<"VerificationCode"> | number
    dayCount?: IntFilter<"VerificationCode"> | number
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    type?: StringFilter<"VerificationCode"> | string
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expireAt?: SortOrder
    hourCount?: SortOrder
    dayCount?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    phone?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expireAt?: DateTimeFilter<"VerificationCode"> | Date | string
    hourCount?: IntFilter<"VerificationCode"> | number
    dayCount?: IntFilter<"VerificationCode"> | number
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    type?: StringFilter<"VerificationCode"> | string
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expireAt?: SortOrder
    hourCount?: SortOrder
    dayCount?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _avg?: VerificationCodeAvgOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
    _sum?: VerificationCodeSumOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    phone?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    expireAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    hourCount?: IntWithAggregatesFilter<"VerificationCode"> | number
    dayCount?: IntWithAggregatesFilter<"VerificationCode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    type?: StringWithAggregatesFilter<"VerificationCode"> | string
  }

  export type TempFileWhereInput = {
    AND?: TempFileWhereInput | TempFileWhereInput[]
    OR?: TempFileWhereInput[]
    NOT?: TempFileWhereInput | TempFileWhereInput[]
    id?: IntFilter<"TempFile"> | number
    fileKey?: StringFilter<"TempFile"> | string
    createdAt?: DateTimeFilter<"TempFile"> | Date | string
    expiresAt?: DateTimeFilter<"TempFile"> | Date | string
  }

  export type TempFileOrderByWithRelationInput = {
    id?: SortOrder
    fileKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TempFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TempFileWhereInput | TempFileWhereInput[]
    OR?: TempFileWhereInput[]
    NOT?: TempFileWhereInput | TempFileWhereInput[]
    fileKey?: StringFilter<"TempFile"> | string
    createdAt?: DateTimeFilter<"TempFile"> | Date | string
    expiresAt?: DateTimeFilter<"TempFile"> | Date | string
  }, "id">

  export type TempFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: TempFileCountOrderByAggregateInput
    _avg?: TempFileAvgOrderByAggregateInput
    _max?: TempFileMaxOrderByAggregateInput
    _min?: TempFileMinOrderByAggregateInput
    _sum?: TempFileSumOrderByAggregateInput
  }

  export type TempFileScalarWhereWithAggregatesInput = {
    AND?: TempFileScalarWhereWithAggregatesInput | TempFileScalarWhereWithAggregatesInput[]
    OR?: TempFileScalarWhereWithAggregatesInput[]
    NOT?: TempFileScalarWhereWithAggregatesInput | TempFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TempFile"> | number
    fileKey?: StringWithAggregatesFilter<"TempFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TempFile"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"TempFile"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNo?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    payAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    receiverName?: StringFilter<"Order"> | string
    receiverPhone?: StringFilter<"Order"> | string
    receiverAddress?: StringFilter<"Order"> | string
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    shippedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    remark?: StringNullableFilter<"Order"> | string | null
    trackingNo?: StringNullableFilter<"Order"> | string | null
    logisticsCompany?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    payAmount?: SortOrder
    status?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    trackingNo?: SortOrderInput | SortOrder
    logisticsCompany?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNo?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    payAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    receiverName?: StringFilter<"Order"> | string
    receiverPhone?: StringFilter<"Order"> | string
    receiverAddress?: StringFilter<"Order"> | string
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    shippedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    remark?: StringNullableFilter<"Order"> | string | null
    trackingNo?: StringNullableFilter<"Order"> | string | null
    logisticsCompany?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }, "id" | "orderNo">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    payAmount?: SortOrder
    status?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    trackingNo?: SortOrderInput | SortOrder
    logisticsCompany?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNo?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    payAmount?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    receiverName?: StringWithAggregatesFilter<"Order"> | string
    receiverPhone?: StringWithAggregatesFilter<"Order"> | string
    receiverAddress?: StringWithAggregatesFilter<"Order"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    shippedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    remark?: StringNullableWithAggregatesFilter<"Order"> | string | null
    trackingNo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    logisticsCompany?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    productImage?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    productImage?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    productName?: StringWithAggregatesFilter<"OrderItem"> | string
    productImage?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    subtotal?: FloatWithAggregatesFilter<"OrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    id?: StringFilter<"UserAddress"> | string
    userId?: StringFilter<"UserAddress"> | string
    name?: StringFilter<"UserAddress"> | string
    phone?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    detail?: StringFilter<"UserAddress"> | string
    isDefault?: BoolFilter<"UserAddress"> | boolean
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    detail?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    userId?: StringFilter<"UserAddress"> | string
    name?: StringFilter<"UserAddress"> | string
    phone?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    detail?: StringFilter<"UserAddress"> | string
    isDefault?: BoolFilter<"UserAddress"> | boolean
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    detail?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAddress"> | string
    userId?: StringWithAggregatesFilter<"UserAddress"> | string
    name?: StringWithAggregatesFilter<"UserAddress"> | string
    phone?: StringWithAggregatesFilter<"UserAddress"> | string
    province?: StringWithAggregatesFilter<"UserAddress"> | string
    city?: StringWithAggregatesFilter<"UserAddress"> | string
    district?: StringWithAggregatesFilter<"UserAddress"> | string
    detail?: StringWithAggregatesFilter<"UserAddress"> | string
    isDefault?: BoolWithAggregatesFilter<"UserAddress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarUrl?: FileCreateNestedOneWithoutAvatarUrlInput
    orders?: OrderCreateNestedManyWithoutUserInput
    addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    avatarFileId?: number | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarUrl?: FileUpdateOneWithoutAvatarUrlNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFileId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    avatarFileId?: number | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFileId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductCategoryCreateInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    normalProducts?: NormalProductCreateNestedManyWithoutCategoryInput
  }

  export type NormalProductCategoryUncheckedCreateInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    normalProducts?: NormalProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type NormalProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    normalProducts?: NormalProductUpdateManyWithoutCategoryNestedInput
  }

  export type NormalProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    normalProducts?: NormalProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NormalProductCategoryCreateManyInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileCreateNestedManyWithoutGalleryImagesInput
    detailImage?: FileCreateNestedOneWithoutDetailImageInput
    category: NormalProductCategoryCreateNestedOneWithoutNormalProductsInput
  }

  export type NormalProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    detailImageId?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileUncheckedCreateNestedManyWithoutGalleryImagesInput
  }

  export type NormalProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: FileUpdateOneWithoutDetailImageNestedInput
    category?: NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput
  }

  export type NormalProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUncheckedUpdateManyWithoutGalleryImagesNestedInput
  }

  export type NormalProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    detailImageId?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductUncheckedCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseUncheckedCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseUncheckedCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUpdateInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUncheckedUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUncheckedUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUpdateManyMutationInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CourseCategoryCreateInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUncheckedCreateInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryCreateManyInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    coverImage: FileCreateNestedOneWithoutCoverImageInput
    videoUrl: FileCreateNestedOneWithoutVideoUrlInput
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coverImage?: FileUpdateOneRequiredWithoutCoverImageNestedInput
    videoUrl?: FileUpdateOneRequiredWithoutVideoUrlNestedInput
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    id?: string
    phone: string
    code: string
    expireAt: Date | string
    hourCount?: number
    dayCount?: number
    createdAt?: Date | string
    type?: string
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    phone: string
    code: string
    expireAt: Date | string
    hourCount?: number
    dayCount?: number
    createdAt?: Date | string
    type?: string
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourCount?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourCount?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    phone: string
    code: string
    expireAt: Date | string
    hourCount?: number
    dayCount?: number
    createdAt?: Date | string
    type?: string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourCount?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hourCount?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TempFileCreateInput = {
    fileKey: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TempFileUncheckedCreateInput = {
    id?: number
    fileKey: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TempFileUpdateInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempFileCreateManyInput = {
    id?: number
    fileKey: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TempFileUpdateManyMutationInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNo: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNo: string
    userId: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNo: string
    userId: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateInput = {
    id?: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type UserAddressUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateManyInput = {
    id?: string
    userId: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type FileNullableScalarRelationFilter = {
    is?: FileWhereInput | null
    isNot?: FileWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type UserAddressListRelationFilter = {
    every?: UserAddressWhereInput
    some?: UserAddressWhereInput
    none?: UserAddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    username?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    rejectReason?: SortOrder
    avatarFileId?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    entity?: SortOrder
    entityAddress?: SortOrder
    cityScope?: SortOrder
    competitionScopes?: SortOrder
    passwordHash?: SortOrder
    powerOfAttorney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    avatarFileId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    username?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rejectReason?: SortOrder
    avatarFileId?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    entity?: SortOrder
    entityAddress?: SortOrder
    cityScope?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    username?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rejectReason?: SortOrder
    avatarFileId?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    entity?: SortOrder
    entityAddress?: SortOrder
    cityScope?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    avatarFileId?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NormalProductListRelationFilter = {
    every?: NormalProductWhereInput
    some?: NormalProductWhereInput
    none?: NormalProductWhereInput
  }

  export type NormalProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NormalProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NormalProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NormalProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type NormalProductCategoryScalarRelationFilter = {
    is?: NormalProductCategoryWhereInput
    isNot?: NormalProductCategoryWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NormalProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    stock?: SortOrder
    detailImageId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NormalProductAvgOrderByAggregateInput = {
    price?: SortOrder
    discountPrice?: SortOrder
    stock?: SortOrder
    detailImageId?: SortOrder
  }

  export type NormalProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    stock?: SortOrder
    detailImageId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NormalProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    stock?: SortOrder
    detailImageId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NormalProductSumOrderByAggregateInput = {
    price?: SortOrder
    discountPrice?: SortOrder
    stock?: SortOrder
    detailImageId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type NormalProductNullableScalarRelationFilter = {
    is?: NormalProductWhereInput | null
    isNot?: NormalProductWhereInput | null
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    meta?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
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

  export type CourseCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeFilter<$PrismaModel> | $Enums.CourseType
  }

  export type FileScalarRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type CourseCategoryScalarRelationFilter = {
    is?: CourseCategoryWhereInput
    isNot?: CourseCategoryWhereInput
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    type?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrder
    studentCount?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    coverImageId?: SortOrder
    price?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrder
    studentCount?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    type?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrder
    studentCount?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    type?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrder
    studentCount?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    coverImageId?: SortOrder
    price?: SortOrder
    videoUrlId?: SortOrder
    previewDuration?: SortOrder
    duration?: SortOrder
    studentCount?: SortOrder
  }

  export type EnumCourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.CourseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseTypeFilter<$PrismaModel>
    _max?: NestedEnumCourseTypeFilter<$PrismaModel>
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expireAt?: SortOrder
    hourCount?: SortOrder
    dayCount?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
  }

  export type VerificationCodeAvgOrderByAggregateInput = {
    hourCount?: SortOrder
    dayCount?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expireAt?: SortOrder
    hourCount?: SortOrder
    dayCount?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expireAt?: SortOrder
    hourCount?: SortOrder
    dayCount?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
  }

  export type VerificationCodeSumOrderByAggregateInput = {
    hourCount?: SortOrder
    dayCount?: SortOrder
  }

  export type TempFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TempFileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TempFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TempFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TempFileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    payAmount?: SortOrder
    status?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    paidAt?: SortOrder
    shippedAt?: SortOrder
    completedAt?: SortOrder
    remark?: SortOrder
    trackingNo?: SortOrder
    logisticsCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    payAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    payAmount?: SortOrder
    status?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    paidAt?: SortOrder
    shippedAt?: SortOrder
    completedAt?: SortOrder
    remark?: SortOrder
    trackingNo?: SortOrder
    logisticsCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    payAmount?: SortOrder
    status?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    paidAt?: SortOrder
    shippedAt?: SortOrder
    completedAt?: SortOrder
    remark?: SortOrder
    trackingNo?: SortOrder
    logisticsCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    payAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type UserAddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    detail?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    detail?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    detail?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreaterolesInput = {
    set: $Enums.Role[]
  }

  export type UserCreatecompetitionScopesInput = {
    set: string[]
  }

  export type FileCreateNestedOneWithoutAvatarUrlInput = {
    create?: XOR<FileCreateWithoutAvatarUrlInput, FileUncheckedCreateWithoutAvatarUrlInput>
    connectOrCreate?: FileCreateOrConnectWithoutAvatarUrlInput
    connect?: FileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdaterolesInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatecompetitionScopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FileUpdateOneWithoutAvatarUrlNestedInput = {
    create?: XOR<FileCreateWithoutAvatarUrlInput, FileUncheckedCreateWithoutAvatarUrlInput>
    connectOrCreate?: FileCreateOrConnectWithoutAvatarUrlInput
    upsert?: FileUpsertWithoutAvatarUrlInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutAvatarUrlInput, FileUpdateWithoutAvatarUrlInput>, FileUncheckedUpdateWithoutAvatarUrlInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type NormalProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput> | NormalProductCreateWithoutCategoryInput[] | NormalProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutCategoryInput | NormalProductCreateOrConnectWithoutCategoryInput[]
    createMany?: NormalProductCreateManyCategoryInputEnvelope
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
  }

  export type NormalProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput> | NormalProductCreateWithoutCategoryInput[] | NormalProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutCategoryInput | NormalProductCreateOrConnectWithoutCategoryInput[]
    createMany?: NormalProductCreateManyCategoryInputEnvelope
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NormalProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput> | NormalProductCreateWithoutCategoryInput[] | NormalProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutCategoryInput | NormalProductCreateOrConnectWithoutCategoryInput[]
    upsert?: NormalProductUpsertWithWhereUniqueWithoutCategoryInput | NormalProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NormalProductCreateManyCategoryInputEnvelope
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    disconnect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    update?: NormalProductUpdateWithWhereUniqueWithoutCategoryInput | NormalProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NormalProductUpdateManyWithWhereWithoutCategoryInput | NormalProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
  }

  export type NormalProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput> | NormalProductCreateWithoutCategoryInput[] | NormalProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutCategoryInput | NormalProductCreateOrConnectWithoutCategoryInput[]
    upsert?: NormalProductUpsertWithWhereUniqueWithoutCategoryInput | NormalProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NormalProductCreateManyCategoryInputEnvelope
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    disconnect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    update?: NormalProductUpdateWithWhereUniqueWithoutCategoryInput | NormalProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NormalProductUpdateManyWithWhereWithoutCategoryInput | NormalProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
  }

  export type FileCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput> | FileCreateWithoutGalleryImagesInput[] | FileUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGalleryImagesInput | FileCreateOrConnectWithoutGalleryImagesInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileCreateNestedOneWithoutDetailImageInput = {
    create?: XOR<FileCreateWithoutDetailImageInput, FileUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: FileCreateOrConnectWithoutDetailImageInput
    connect?: FileWhereUniqueInput
  }

  export type NormalProductCategoryCreateNestedOneWithoutNormalProductsInput = {
    create?: XOR<NormalProductCategoryCreateWithoutNormalProductsInput, NormalProductCategoryUncheckedCreateWithoutNormalProductsInput>
    connectOrCreate?: NormalProductCategoryCreateOrConnectWithoutNormalProductsInput
    connect?: NormalProductCategoryWhereUniqueInput
  }

  export type FileUncheckedCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput> | FileCreateWithoutGalleryImagesInput[] | FileUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGalleryImagesInput | FileCreateOrConnectWithoutGalleryImagesInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FileUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput> | FileCreateWithoutGalleryImagesInput[] | FileUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGalleryImagesInput | FileCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutGalleryImagesInput | FileUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutGalleryImagesInput | FileUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: FileUpdateManyWithWhereWithoutGalleryImagesInput | FileUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileUpdateOneWithoutDetailImageNestedInput = {
    create?: XOR<FileCreateWithoutDetailImageInput, FileUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: FileCreateOrConnectWithoutDetailImageInput
    upsert?: FileUpsertWithoutDetailImageInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutDetailImageInput, FileUpdateWithoutDetailImageInput>, FileUncheckedUpdateWithoutDetailImageInput>
  }

  export type NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput = {
    create?: XOR<NormalProductCategoryCreateWithoutNormalProductsInput, NormalProductCategoryUncheckedCreateWithoutNormalProductsInput>
    connectOrCreate?: NormalProductCategoryCreateOrConnectWithoutNormalProductsInput
    upsert?: NormalProductCategoryUpsertWithoutNormalProductsInput
    connect?: NormalProductCategoryWhereUniqueInput
    update?: XOR<XOR<NormalProductCategoryUpdateToOneWithWhereWithoutNormalProductsInput, NormalProductCategoryUpdateWithoutNormalProductsInput>, NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput>
  }

  export type FileUncheckedUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput> | FileCreateWithoutGalleryImagesInput[] | FileUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGalleryImagesInput | FileCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutGalleryImagesInput | FileUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutGalleryImagesInput | FileUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: FileUpdateManyWithWhereWithoutGalleryImagesInput | FileUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutAvatarUrlInput = {
    create?: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput> | UserCreateWithoutAvatarUrlInput[] | UserUncheckedCreateWithoutAvatarUrlInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarUrlInput | UserCreateOrConnectWithoutAvatarUrlInput[]
    createMany?: UserCreateManyAvatarUrlInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NormalProductCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput> | NormalProductCreateWithoutGalleryImagesInput[] | NormalProductUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutGalleryImagesInput | NormalProductCreateOrConnectWithoutGalleryImagesInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
  }

  export type NormalProductCreateNestedOneWithoutDetailImageInput = {
    create?: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: NormalProductCreateOrConnectWithoutDetailImageInput
    connect?: NormalProductWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutCoverImageInput = {
    create?: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput> | CourseCreateWithoutCoverImageInput[] | CourseUncheckedCreateWithoutCoverImageInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCoverImageInput | CourseCreateOrConnectWithoutCoverImageInput[]
    createMany?: CourseCreateManyCoverImageInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutVideoUrlInput = {
    create?: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput> | CourseCreateWithoutVideoUrlInput[] | CourseUncheckedCreateWithoutVideoUrlInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutVideoUrlInput | CourseCreateOrConnectWithoutVideoUrlInput[]
    createMany?: CourseCreateManyVideoUrlInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAvatarUrlInput = {
    create?: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput> | UserCreateWithoutAvatarUrlInput[] | UserUncheckedCreateWithoutAvatarUrlInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarUrlInput | UserCreateOrConnectWithoutAvatarUrlInput[]
    createMany?: UserCreateManyAvatarUrlInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput = {
    create?: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput> | NormalProductCreateWithoutGalleryImagesInput[] | NormalProductUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutGalleryImagesInput | NormalProductCreateOrConnectWithoutGalleryImagesInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
  }

  export type NormalProductUncheckedCreateNestedOneWithoutDetailImageInput = {
    create?: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: NormalProductCreateOrConnectWithoutDetailImageInput
    connect?: NormalProductWhereUniqueInput
  }

  export type CourseUncheckedCreateNestedManyWithoutCoverImageInput = {
    create?: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput> | CourseCreateWithoutCoverImageInput[] | CourseUncheckedCreateWithoutCoverImageInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCoverImageInput | CourseCreateOrConnectWithoutCoverImageInput[]
    createMany?: CourseCreateManyCoverImageInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutVideoUrlInput = {
    create?: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput> | CourseCreateWithoutVideoUrlInput[] | CourseUncheckedCreateWithoutVideoUrlInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutVideoUrlInput | CourseCreateOrConnectWithoutVideoUrlInput[]
    createMany?: CourseCreateManyVideoUrlInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutAvatarUrlNestedInput = {
    create?: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput> | UserCreateWithoutAvatarUrlInput[] | UserUncheckedCreateWithoutAvatarUrlInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarUrlInput | UserCreateOrConnectWithoutAvatarUrlInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAvatarUrlInput | UserUpsertWithWhereUniqueWithoutAvatarUrlInput[]
    createMany?: UserCreateManyAvatarUrlInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAvatarUrlInput | UserUpdateWithWhereUniqueWithoutAvatarUrlInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAvatarUrlInput | UserUpdateManyWithWhereWithoutAvatarUrlInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NormalProductUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput> | NormalProductCreateWithoutGalleryImagesInput[] | NormalProductUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutGalleryImagesInput | NormalProductCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: NormalProductUpsertWithWhereUniqueWithoutGalleryImagesInput | NormalProductUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    disconnect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    update?: NormalProductUpdateWithWhereUniqueWithoutGalleryImagesInput | NormalProductUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: NormalProductUpdateManyWithWhereWithoutGalleryImagesInput | NormalProductUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
  }

  export type NormalProductUpdateOneWithoutDetailImageNestedInput = {
    create?: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: NormalProductCreateOrConnectWithoutDetailImageInput
    upsert?: NormalProductUpsertWithoutDetailImageInput
    disconnect?: NormalProductWhereInput | boolean
    delete?: NormalProductWhereInput | boolean
    connect?: NormalProductWhereUniqueInput
    update?: XOR<XOR<NormalProductUpdateToOneWithWhereWithoutDetailImageInput, NormalProductUpdateWithoutDetailImageInput>, NormalProductUncheckedUpdateWithoutDetailImageInput>
  }

  export type CourseUpdateManyWithoutCoverImageNestedInput = {
    create?: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput> | CourseCreateWithoutCoverImageInput[] | CourseUncheckedCreateWithoutCoverImageInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCoverImageInput | CourseCreateOrConnectWithoutCoverImageInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCoverImageInput | CourseUpsertWithWhereUniqueWithoutCoverImageInput[]
    createMany?: CourseCreateManyCoverImageInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCoverImageInput | CourseUpdateWithWhereUniqueWithoutCoverImageInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCoverImageInput | CourseUpdateManyWithWhereWithoutCoverImageInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutVideoUrlNestedInput = {
    create?: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput> | CourseCreateWithoutVideoUrlInput[] | CourseUncheckedCreateWithoutVideoUrlInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutVideoUrlInput | CourseCreateOrConnectWithoutVideoUrlInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutVideoUrlInput | CourseUpsertWithWhereUniqueWithoutVideoUrlInput[]
    createMany?: CourseCreateManyVideoUrlInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutVideoUrlInput | CourseUpdateWithWhereUniqueWithoutVideoUrlInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutVideoUrlInput | CourseUpdateManyWithWhereWithoutVideoUrlInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAvatarUrlNestedInput = {
    create?: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput> | UserCreateWithoutAvatarUrlInput[] | UserUncheckedCreateWithoutAvatarUrlInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarUrlInput | UserCreateOrConnectWithoutAvatarUrlInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAvatarUrlInput | UserUpsertWithWhereUniqueWithoutAvatarUrlInput[]
    createMany?: UserCreateManyAvatarUrlInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAvatarUrlInput | UserUpdateWithWhereUniqueWithoutAvatarUrlInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAvatarUrlInput | UserUpdateManyWithWhereWithoutAvatarUrlInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput = {
    create?: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput> | NormalProductCreateWithoutGalleryImagesInput[] | NormalProductUncheckedCreateWithoutGalleryImagesInput[]
    connectOrCreate?: NormalProductCreateOrConnectWithoutGalleryImagesInput | NormalProductCreateOrConnectWithoutGalleryImagesInput[]
    upsert?: NormalProductUpsertWithWhereUniqueWithoutGalleryImagesInput | NormalProductUpsertWithWhereUniqueWithoutGalleryImagesInput[]
    set?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    disconnect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    delete?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    connect?: NormalProductWhereUniqueInput | NormalProductWhereUniqueInput[]
    update?: NormalProductUpdateWithWhereUniqueWithoutGalleryImagesInput | NormalProductUpdateWithWhereUniqueWithoutGalleryImagesInput[]
    updateMany?: NormalProductUpdateManyWithWhereWithoutGalleryImagesInput | NormalProductUpdateManyWithWhereWithoutGalleryImagesInput[]
    deleteMany?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
  }

  export type NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput = {
    create?: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
    connectOrCreate?: NormalProductCreateOrConnectWithoutDetailImageInput
    upsert?: NormalProductUpsertWithoutDetailImageInput
    disconnect?: NormalProductWhereInput | boolean
    delete?: NormalProductWhereInput | boolean
    connect?: NormalProductWhereUniqueInput
    update?: XOR<XOR<NormalProductUpdateToOneWithWhereWithoutDetailImageInput, NormalProductUpdateWithoutDetailImageInput>, NormalProductUncheckedUpdateWithoutDetailImageInput>
  }

  export type CourseUncheckedUpdateManyWithoutCoverImageNestedInput = {
    create?: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput> | CourseCreateWithoutCoverImageInput[] | CourseUncheckedCreateWithoutCoverImageInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCoverImageInput | CourseCreateOrConnectWithoutCoverImageInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCoverImageInput | CourseUpsertWithWhereUniqueWithoutCoverImageInput[]
    createMany?: CourseCreateManyCoverImageInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCoverImageInput | CourseUpdateWithWhereUniqueWithoutCoverImageInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCoverImageInput | CourseUpdateManyWithWhereWithoutCoverImageInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutVideoUrlNestedInput = {
    create?: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput> | CourseCreateWithoutVideoUrlInput[] | CourseUncheckedCreateWithoutVideoUrlInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutVideoUrlInput | CourseCreateOrConnectWithoutVideoUrlInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutVideoUrlInput | CourseUpsertWithWhereUniqueWithoutVideoUrlInput[]
    createMany?: CourseCreateManyVideoUrlInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutVideoUrlInput | CourseUpdateWithWhereUniqueWithoutVideoUrlInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutVideoUrlInput | CourseUpdateManyWithWhereWithoutVideoUrlInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutCoverImageInput = {
    create?: XOR<FileCreateWithoutCoverImageInput, FileUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: FileCreateOrConnectWithoutCoverImageInput
    connect?: FileWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutVideoUrlInput = {
    create?: XOR<FileCreateWithoutVideoUrlInput, FileUncheckedCreateWithoutVideoUrlInput>
    connectOrCreate?: FileCreateOrConnectWithoutVideoUrlInput
    connect?: FileWhereUniqueInput
  }

  export type CourseCategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
  }

  export type EnumCourseTypeFieldUpdateOperationsInput = {
    set?: $Enums.CourseType
  }

  export type FileUpdateOneRequiredWithoutCoverImageNestedInput = {
    create?: XOR<FileCreateWithoutCoverImageInput, FileUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: FileCreateOrConnectWithoutCoverImageInput
    upsert?: FileUpsertWithoutCoverImageInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutCoverImageInput, FileUpdateWithoutCoverImageInput>, FileUncheckedUpdateWithoutCoverImageInput>
  }

  export type FileUpdateOneRequiredWithoutVideoUrlNestedInput = {
    create?: XOR<FileCreateWithoutVideoUrlInput, FileUncheckedCreateWithoutVideoUrlInput>
    connectOrCreate?: FileCreateOrConnectWithoutVideoUrlInput
    upsert?: FileUpsertWithoutVideoUrlInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutVideoUrlInput, FileUpdateWithoutVideoUrlInput>, FileUncheckedUpdateWithoutVideoUrlInput>
  }

  export type CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    upsert?: CourseCategoryUpsertWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
    update?: XOR<XOR<CourseCategoryUpdateToOneWithWhereWithoutCoursesInput, CourseCategoryUpdateWithoutCoursesInput>, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumCourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeFilter<$PrismaModel> | $Enums.CourseType
  }

  export type NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.CourseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseTypeFilter<$PrismaModel>
    _max?: NestedEnumCourseTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FileCreateWithoutAvatarUrlInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    galleryImages?: NormalProductCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUncheckedCreateWithoutAvatarUrlInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    galleryImages?: NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductUncheckedCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseUncheckedCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseUncheckedCreateNestedManyWithoutVideoUrlInput
  }

  export type FileCreateOrConnectWithoutAvatarUrlInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutAvatarUrlInput, FileUncheckedCreateWithoutAvatarUrlInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    orderNo: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    orderNo: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAddressCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressCreateOrConnectWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressCreateManyUserInputEnvelope = {
    data: UserAddressCreateManyUserInput | UserAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutAvatarUrlInput = {
    update: XOR<FileUpdateWithoutAvatarUrlInput, FileUncheckedUpdateWithoutAvatarUrlInput>
    create: XOR<FileCreateWithoutAvatarUrlInput, FileUncheckedCreateWithoutAvatarUrlInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutAvatarUrlInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutAvatarUrlInput, FileUncheckedUpdateWithoutAvatarUrlInput>
  }

  export type FileUpdateWithoutAvatarUrlInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    galleryImages?: NormalProductUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateWithoutAvatarUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    galleryImages?: NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUncheckedUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUncheckedUpdateManyWithoutVideoUrlNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNo?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    payAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    receiverName?: StringFilter<"Order"> | string
    receiverPhone?: StringFilter<"Order"> | string
    receiverAddress?: StringFilter<"Order"> | string
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    shippedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    remark?: StringNullableFilter<"Order"> | string | null
    trackingNo?: StringNullableFilter<"Order"> | string | null
    logisticsCompany?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    update: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    data: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserAddressUpdateManyWithWhereWithoutUserInput = {
    where: UserAddressScalarWhereInput
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAddressScalarWhereInput = {
    AND?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    OR?: UserAddressScalarWhereInput[]
    NOT?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    id?: StringFilter<"UserAddress"> | string
    userId?: StringFilter<"UserAddress"> | string
    name?: StringFilter<"UserAddress"> | string
    phone?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    detail?: StringFilter<"UserAddress"> | string
    isDefault?: BoolFilter<"UserAddress"> | boolean
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
  }

  export type NormalProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileCreateNestedManyWithoutGalleryImagesInput
    detailImage?: FileCreateNestedOneWithoutDetailImageInput
  }

  export type NormalProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    detailImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileUncheckedCreateNestedManyWithoutGalleryImagesInput
  }

  export type NormalProductCreateOrConnectWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput
    create: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput>
  }

  export type NormalProductCreateManyCategoryInputEnvelope = {
    data: NormalProductCreateManyCategoryInput | NormalProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NormalProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput
    update: XOR<NormalProductUpdateWithoutCategoryInput, NormalProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<NormalProductCreateWithoutCategoryInput, NormalProductUncheckedCreateWithoutCategoryInput>
  }

  export type NormalProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NormalProductWhereUniqueInput
    data: XOR<NormalProductUpdateWithoutCategoryInput, NormalProductUncheckedUpdateWithoutCategoryInput>
  }

  export type NormalProductUpdateManyWithWhereWithoutCategoryInput = {
    where: NormalProductScalarWhereInput
    data: XOR<NormalProductUpdateManyMutationInput, NormalProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NormalProductScalarWhereInput = {
    AND?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
    OR?: NormalProductScalarWhereInput[]
    NOT?: NormalProductScalarWhereInput | NormalProductScalarWhereInput[]
    id?: StringFilter<"NormalProduct"> | string
    name?: StringFilter<"NormalProduct"> | string
    description?: StringNullableFilter<"NormalProduct"> | string | null
    price?: FloatFilter<"NormalProduct"> | number
    discountPrice?: FloatNullableFilter<"NormalProduct"> | number | null
    stock?: IntFilter<"NormalProduct"> | number
    detailImageId?: IntNullableFilter<"NormalProduct"> | number | null
    categoryId?: StringFilter<"NormalProduct"> | string
    createdAt?: DateTimeFilter<"NormalProduct"> | Date | string
    updatedAt?: DateTimeFilter<"NormalProduct"> | Date | string
  }

  export type FileCreateWithoutGalleryImagesInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserCreateNestedManyWithoutAvatarUrlInput
    detailImage?: NormalProductCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUncheckedCreateWithoutGalleryImagesInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedCreateNestedManyWithoutAvatarUrlInput
    detailImage?: NormalProductUncheckedCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseUncheckedCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseUncheckedCreateNestedManyWithoutVideoUrlInput
  }

  export type FileCreateOrConnectWithoutGalleryImagesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput>
  }

  export type FileCreateWithoutDetailImageInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductCreateNestedManyWithoutGalleryImagesInput
    coverImage?: CourseCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUncheckedCreateWithoutDetailImageInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput
    coverImage?: CourseUncheckedCreateNestedManyWithoutCoverImageInput
    videoUrl?: CourseUncheckedCreateNestedManyWithoutVideoUrlInput
  }

  export type FileCreateOrConnectWithoutDetailImageInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutDetailImageInput, FileUncheckedCreateWithoutDetailImageInput>
  }

  export type NormalProductCategoryCreateWithoutNormalProductsInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductCategoryUncheckedCreateWithoutNormalProductsInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductCategoryCreateOrConnectWithoutNormalProductsInput = {
    where: NormalProductCategoryWhereUniqueInput
    create: XOR<NormalProductCategoryCreateWithoutNormalProductsInput, NormalProductCategoryUncheckedCreateWithoutNormalProductsInput>
  }

  export type FileUpsertWithWhereUniqueWithoutGalleryImagesInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutGalleryImagesInput, FileUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<FileCreateWithoutGalleryImagesInput, FileUncheckedCreateWithoutGalleryImagesInput>
  }

  export type FileUpdateWithWhereUniqueWithoutGalleryImagesInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutGalleryImagesInput, FileUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type FileUpdateManyWithWhereWithoutGalleryImagesInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutGalleryImagesInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    fileKey?: StringFilter<"File"> | string
    fileName?: StringNullableFilter<"File"> | string | null
    fileSize?: IntFilter<"File"> | number
    mimeType?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    meta?: JsonNullableFilter<"File">
  }

  export type FileUpsertWithoutDetailImageInput = {
    update: XOR<FileUpdateWithoutDetailImageInput, FileUncheckedUpdateWithoutDetailImageInput>
    create: XOR<FileCreateWithoutDetailImageInput, FileUncheckedCreateWithoutDetailImageInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutDetailImageInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutDetailImageInput, FileUncheckedUpdateWithoutDetailImageInput>
  }

  export type FileUpdateWithoutDetailImageInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUpdateManyWithoutGalleryImagesNestedInput
    coverImage?: CourseUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateWithoutDetailImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput
    coverImage?: CourseUncheckedUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUncheckedUpdateManyWithoutVideoUrlNestedInput
  }

  export type NormalProductCategoryUpsertWithoutNormalProductsInput = {
    update: XOR<NormalProductCategoryUpdateWithoutNormalProductsInput, NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput>
    create: XOR<NormalProductCategoryCreateWithoutNormalProductsInput, NormalProductCategoryUncheckedCreateWithoutNormalProductsInput>
    where?: NormalProductCategoryWhereInput
  }

  export type NormalProductCategoryUpdateToOneWithWhereWithoutNormalProductsInput = {
    where?: NormalProductCategoryWhereInput
    data: XOR<NormalProductCategoryUpdateWithoutNormalProductsInput, NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput>
  }

  export type NormalProductCategoryUpdateWithoutNormalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductCategoryUncheckedUpdateWithoutNormalProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAvatarUrlInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvatarUrlInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvatarUrlInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput>
  }

  export type UserCreateManyAvatarUrlInputEnvelope = {
    data: UserCreateManyAvatarUrlInput | UserCreateManyAvatarUrlInput[]
    skipDuplicates?: boolean
  }

  export type NormalProductCreateWithoutGalleryImagesInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detailImage?: FileCreateNestedOneWithoutDetailImageInput
    category: NormalProductCategoryCreateNestedOneWithoutNormalProductsInput
  }

  export type NormalProductUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    detailImageId?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductCreateOrConnectWithoutGalleryImagesInput = {
    where: NormalProductWhereUniqueInput
    create: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput>
  }

  export type NormalProductCreateWithoutDetailImageInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileCreateNestedManyWithoutGalleryImagesInput
    category: NormalProductCategoryCreateNestedOneWithoutNormalProductsInput
  }

  export type NormalProductUncheckedCreateWithoutDetailImageInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: FileUncheckedCreateNestedManyWithoutGalleryImagesInput
  }

  export type NormalProductCreateOrConnectWithoutDetailImageInput = {
    where: NormalProductWhereUniqueInput
    create: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
  }

  export type CourseCreateWithoutCoverImageInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: FileCreateNestedOneWithoutVideoUrlInput
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutCoverImageInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutCoverImageInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput>
  }

  export type CourseCreateManyCoverImageInputEnvelope = {
    data: CourseCreateManyCoverImageInput | CourseCreateManyCoverImageInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutVideoUrlInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    coverImage: FileCreateNestedOneWithoutCoverImageInput
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutVideoUrlInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutVideoUrlInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput>
  }

  export type CourseCreateManyVideoUrlInputEnvelope = {
    data: CourseCreateManyVideoUrlInput | CourseCreateManyVideoUrlInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAvatarUrlInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAvatarUrlInput, UserUncheckedUpdateWithoutAvatarUrlInput>
    create: XOR<UserCreateWithoutAvatarUrlInput, UserUncheckedCreateWithoutAvatarUrlInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAvatarUrlInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAvatarUrlInput, UserUncheckedUpdateWithoutAvatarUrlInput>
  }

  export type UserUpdateManyWithWhereWithoutAvatarUrlInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAvatarUrlInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    username?: StringFilter<"User"> | string
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    roles?: EnumRoleNullableListFilter<"User">
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    rejectReason?: StringNullableFilter<"User"> | string | null
    avatarFileId?: IntNullableFilter<"User"> | number | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    idType?: StringNullableFilter<"User"> | string | null
    idNumber?: StringNullableFilter<"User"> | string | null
    entity?: StringNullableFilter<"User"> | string | null
    entityAddress?: StringNullableFilter<"User"> | string | null
    cityScope?: StringNullableFilter<"User"> | string | null
    competitionScopes?: StringNullableListFilter<"User">
    passwordHash?: StringNullableFilter<"User"> | string | null
    powerOfAttorney?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type NormalProductUpsertWithWhereUniqueWithoutGalleryImagesInput = {
    where: NormalProductWhereUniqueInput
    update: XOR<NormalProductUpdateWithoutGalleryImagesInput, NormalProductUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<NormalProductCreateWithoutGalleryImagesInput, NormalProductUncheckedCreateWithoutGalleryImagesInput>
  }

  export type NormalProductUpdateWithWhereUniqueWithoutGalleryImagesInput = {
    where: NormalProductWhereUniqueInput
    data: XOR<NormalProductUpdateWithoutGalleryImagesInput, NormalProductUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type NormalProductUpdateManyWithWhereWithoutGalleryImagesInput = {
    where: NormalProductScalarWhereInput
    data: XOR<NormalProductUpdateManyMutationInput, NormalProductUncheckedUpdateManyWithoutGalleryImagesInput>
  }

  export type NormalProductUpsertWithoutDetailImageInput = {
    update: XOR<NormalProductUpdateWithoutDetailImageInput, NormalProductUncheckedUpdateWithoutDetailImageInput>
    create: XOR<NormalProductCreateWithoutDetailImageInput, NormalProductUncheckedCreateWithoutDetailImageInput>
    where?: NormalProductWhereInput
  }

  export type NormalProductUpdateToOneWithWhereWithoutDetailImageInput = {
    where?: NormalProductWhereInput
    data: XOR<NormalProductUpdateWithoutDetailImageInput, NormalProductUncheckedUpdateWithoutDetailImageInput>
  }

  export type NormalProductUpdateWithoutDetailImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUpdateManyWithoutGalleryImagesNestedInput
    category?: NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput
  }

  export type NormalProductUncheckedUpdateWithoutDetailImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUncheckedUpdateManyWithoutGalleryImagesNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutCoverImageInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCoverImageInput, CourseUncheckedUpdateWithoutCoverImageInput>
    create: XOR<CourseCreateWithoutCoverImageInput, CourseUncheckedCreateWithoutCoverImageInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCoverImageInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCoverImageInput, CourseUncheckedUpdateWithoutCoverImageInput>
  }

  export type CourseUpdateManyWithWhereWithoutCoverImageInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCoverImageInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    coverImageId?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    videoUrlId?: IntFilter<"Course"> | number
    previewDuration?: IntFilter<"Course"> | number
    duration?: IntNullableFilter<"Course"> | number | null
    studentCount?: IntNullableFilter<"Course"> | number | null
    isPublished?: BoolFilter<"Course"> | boolean
    categoryId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutVideoUrlInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutVideoUrlInput, CourseUncheckedUpdateWithoutVideoUrlInput>
    create: XOR<CourseCreateWithoutVideoUrlInput, CourseUncheckedCreateWithoutVideoUrlInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutVideoUrlInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutVideoUrlInput, CourseUncheckedUpdateWithoutVideoUrlInput>
  }

  export type CourseUpdateManyWithWhereWithoutVideoUrlInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutVideoUrlInput>
  }

  export type CourseCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    coverImage: FileCreateNestedOneWithoutCoverImageInput
    videoUrl: FileCreateNestedOneWithoutVideoUrlInput
  }

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FileCreateWithoutCoverImageInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductCreateNestedOneWithoutDetailImageInput
    videoUrl?: CourseCreateNestedManyWithoutVideoUrlInput
  }

  export type FileUncheckedCreateWithoutCoverImageInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductUncheckedCreateNestedOneWithoutDetailImageInput
    videoUrl?: CourseUncheckedCreateNestedManyWithoutVideoUrlInput
  }

  export type FileCreateOrConnectWithoutCoverImageInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutCoverImageInput, FileUncheckedCreateWithoutCoverImageInput>
  }

  export type FileCreateWithoutVideoUrlInput = {
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseCreateNestedManyWithoutCoverImageInput
  }

  export type FileUncheckedCreateWithoutVideoUrlInput = {
    id?: number
    fileKey: string
    fileName?: string | null
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedCreateNestedManyWithoutAvatarUrlInput
    galleryImages?: NormalProductUncheckedCreateNestedManyWithoutGalleryImagesInput
    detailImage?: NormalProductUncheckedCreateNestedOneWithoutDetailImageInput
    coverImage?: CourseUncheckedCreateNestedManyWithoutCoverImageInput
  }

  export type FileCreateOrConnectWithoutVideoUrlInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutVideoUrlInput, FileUncheckedCreateWithoutVideoUrlInput>
  }

  export type CourseCategoryCreateWithoutCoursesInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCategoryUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCategoryCreateOrConnectWithoutCoursesInput = {
    where: CourseCategoryWhereUniqueInput
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
  }

  export type FileUpsertWithoutCoverImageInput = {
    update: XOR<FileUpdateWithoutCoverImageInput, FileUncheckedUpdateWithoutCoverImageInput>
    create: XOR<FileCreateWithoutCoverImageInput, FileUncheckedCreateWithoutCoverImageInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutCoverImageInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutCoverImageInput, FileUncheckedUpdateWithoutCoverImageInput>
  }

  export type FileUpdateWithoutCoverImageInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUpdateOneWithoutDetailImageNestedInput
    videoUrl?: CourseUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateWithoutCoverImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput
    videoUrl?: CourseUncheckedUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUpsertWithoutVideoUrlInput = {
    update: XOR<FileUpdateWithoutVideoUrlInput, FileUncheckedUpdateWithoutVideoUrlInput>
    create: XOR<FileCreateWithoutVideoUrlInput, FileUncheckedCreateWithoutVideoUrlInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutVideoUrlInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutVideoUrlInput, FileUncheckedUpdateWithoutVideoUrlInput>
  }

  export type FileUpdateWithoutVideoUrlInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUpdateManyWithoutCoverImageNestedInput
  }

  export type FileUncheckedUpdateWithoutVideoUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedUpdateManyWithoutAvatarUrlNestedInput
    galleryImages?: NormalProductUncheckedUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUncheckedUpdateManyWithoutCoverImageNestedInput
  }

  export type CourseCategoryUpsertWithoutCoursesInput = {
    update: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    where?: CourseCategoryWhereInput
  }

  export type CourseCategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseCategoryWhereInput
    data: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseCategoryUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCategoryUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarUrl?: FileCreateNestedOneWithoutAvatarUrlInput
    addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    avatarFileId?: number | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarUrl?: FileUpdateOneWithoutAvatarUrlNestedInput
    addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFileId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    productImage?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNo: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNo: string
    userId: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarUrl?: FileCreateNestedOneWithoutAvatarUrlInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    avatarFileId?: number | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarUrl?: FileUpdateOneWithoutAvatarUrlNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFileId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    orderNo: string
    totalAmount: number
    payAmount: number
    status?: $Enums.OrderStatus
    receiverName: string
    receiverPhone: string
    receiverAddress: string
    paidAt?: Date | string | null
    shippedAt?: Date | string | null
    completedAt?: Date | string | null
    remark?: string | null
    trackingNo?: string | null
    logisticsCompany?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressCreateManyUserInput = {
    id?: string
    name: string
    phone: string
    province: string
    city: string
    district: string
    detail: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNo?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    receiverName?: StringFieldUpdateOperationsInput | string
    receiverPhone?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNo?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsCompany?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discountPrice?: number | null
    stock: number
    detailImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NormalProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUpdateManyWithoutGalleryImagesNestedInput
    detailImage?: FileUpdateOneWithoutDetailImageNestedInput
  }

  export type NormalProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: FileUncheckedUpdateManyWithoutGalleryImagesNestedInput
  }

  export type NormalProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutGalleryImagesInput = {
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUpdateManyWithoutAvatarUrlNestedInput
    detailImage?: NormalProductUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateWithoutGalleryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    avatarUrl?: UserUncheckedUpdateManyWithoutAvatarUrlNestedInput
    detailImage?: NormalProductUncheckedUpdateOneWithoutDetailImageNestedInput
    coverImage?: CourseUncheckedUpdateManyWithoutCoverImageNestedInput
    videoUrl?: CourseUncheckedUpdateManyWithoutVideoUrlNestedInput
  }

  export type FileUncheckedUpdateManyWithoutGalleryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserCreateManyAvatarUrlInput = {
    username: string
    id?: string
    name: string
    phone: string
    roles?: UserCreaterolesInput | $Enums.Role[]
    status?: $Enums.UserStatus
    rejectReason?: string | null
    email?: string | null
    gender?: string | null
    idType?: string | null
    idNumber?: string | null
    entity?: string | null
    entityAddress?: string | null
    cityScope?: string | null
    competitionScopes?: UserCreatecompetitionScopesInput | string[]
    passwordHash?: string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateManyCoverImageInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateManyVideoUrlInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutAvatarUrlInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarUrlInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAvatarUrlInput = {
    username?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    roles?: UserUpdaterolesInput | $Enums.Role[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    rejectReason?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    idType?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityAddress?: NullableStringFieldUpdateOperationsInput | string | null
    cityScope?: NullableStringFieldUpdateOperationsInput | string | null
    competitionScopes?: UserUpdatecompetitionScopesInput | string[]
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    powerOfAttorney?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailImage?: FileUpdateOneWithoutDetailImageNestedInput
    category?: NormalProductCategoryUpdateOneRequiredWithoutNormalProductsNestedInput
  }

  export type NormalProductUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormalProductUncheckedUpdateManyWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    detailImageId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutCoverImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: FileUpdateOneRequiredWithoutVideoUrlNestedInput
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutCoverImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyWithoutCoverImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutVideoUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coverImage?: FileUpdateOneRequiredWithoutCoverImageNestedInput
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutVideoUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyWithoutVideoUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyCategoryInput = {
    id?: string
    name: string
    coverImageId: number
    description?: string | null
    price: number
    type?: $Enums.CourseType
    videoUrlId: number
    previewDuration?: number
    duration?: number | null
    studentCount?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coverImage?: FileUpdateOneRequiredWithoutCoverImageNestedInput
    videoUrl?: FileUpdateOneRequiredWithoutVideoUrlNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImageId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    videoUrlId?: IntFieldUpdateOperationsInput | number
    previewDuration?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    studentCount?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    productName: string
    productImage?: string | null
    price: number
    quantity: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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