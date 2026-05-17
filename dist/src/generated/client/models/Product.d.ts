import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
    minStock: number | null;
};
export type ProductSumAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
    minStock: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    sku: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    minStock: number | null;
    imageUrl: string | null;
    status: $Enums.ProductStatus | null;
    categoryId: string | null;
    supplierId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    sku: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    minStock: number | null;
    imageUrl: string | null;
    status: $Enums.ProductStatus | null;
    categoryId: string | null;
    supplierId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    sku: number;
    description: number;
    price: number;
    stock: number;
    minStock: number;
    imageUrl: number;
    status: number;
    categoryId: number;
    supplierId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    price?: true;
    stock?: true;
    minStock?: true;
};
export type ProductSumAggregateInputType = {
    price?: true;
    stock?: true;
    minStock?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    sku?: true;
    description?: true;
    price?: true;
    stock?: true;
    minStock?: true;
    imageUrl?: true;
    status?: true;
    categoryId?: true;
    supplierId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    sku?: true;
    description?: true;
    price?: true;
    stock?: true;
    minStock?: true;
    imageUrl?: true;
    status?: true;
    categoryId?: true;
    supplierId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    sku?: true;
    description?: true;
    price?: true;
    stock?: true;
    minStock?: true;
    imageUrl?: true;
    status?: true;
    categoryId?: true;
    supplierId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    name: string;
    sku: string;
    description: string | null;
    price: runtime.Decimal;
    stock: number;
    minStock: number;
    imageUrl: string | null;
    status: $Enums.ProductStatus;
    categoryId: string | null;
    supplierId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    status?: Prisma.EnumProductStatusFilter<"Product"> | $Enums.ProductStatus;
    categoryId?: Prisma.StringNullableFilter<"Product"> | string | null;
    supplierId?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    movements?: Prisma.InventoryMovementListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    movements?: Prisma.InventoryMovementOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sku?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    status?: Prisma.EnumProductStatusFilter<"Product"> | $Enums.ProductStatus;
    categoryId?: Prisma.StringNullableFilter<"Product"> | string | null;
    supplierId?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    movements?: Prisma.InventoryMovementListRelationFilter;
}, "id" | "sku">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    sku?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    price?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    minStock?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    status?: Prisma.EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    supplierId?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    movements?: Prisma.InventoryMovementCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    categoryId?: string | null;
    supplierId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutProductsNestedInput;
    movements?: Prisma.InventoryMovementUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    categoryId?: string | null;
    supplierId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus;
};
export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSupplierInput | Prisma.ProductUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSupplierInput | Prisma.ProductUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.ProductUpsertWithoutMovementsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutMovementsInput, Prisma.ProductUpdateWithoutMovementsInput>, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
};
export type ProductCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    movements?: Prisma.InventoryMovementCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    supplierId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductCreateManyCategoryInputEnvelope = {
    data: Prisma.ProductCreateManyCategoryInput | Prisma.ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
};
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    status?: Prisma.EnumProductStatusFilter<"Product"> | $Enums.ProductStatus;
    categoryId?: Prisma.StringNullableFilter<"Product"> | string | null;
    supplierId?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateWithoutSupplierInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    movements?: Prisma.InventoryMovementCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput>;
};
export type ProductCreateManySupplierInputEnvelope = {
    data: Prisma.ProductCreateManySupplierInput | Prisma.ProductCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSupplierInput, Prisma.ProductUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput>;
};
export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSupplierInput, Prisma.ProductUncheckedUpdateWithoutSupplierInput>;
};
export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutSupplierInput>;
};
export type ProductCreateWithoutMovementsInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutProductsInput;
};
export type ProductUncheckedCreateWithoutMovementsInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    categoryId?: string | null;
    supplierId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCreateOrConnectWithoutMovementsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
};
export type ProductUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutMovementsInput, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutMovementsInput, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
};
export type ProductUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManyCategoryInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    supplierId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutProductsNestedInput;
    movements?: Prisma.InventoryMovementUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManySupplierInput = {
    id?: string;
    name: string;
    sku: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    minStock?: number;
    imageUrl?: string | null;
    status?: $Enums.ProductStatus;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    movements?: Prisma.InventoryMovementUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOutputType = {
    movements: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | ProductCountOutputTypeCountMovementsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    sku?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    minStock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    categoryId?: boolean;
    supplierId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
    movements?: boolean | Prisma.Product$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    sku?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    minStock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    categoryId?: boolean;
    supplierId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    sku?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    minStock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    categoryId?: boolean;
    supplierId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    sku?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    minStock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    categoryId?: boolean;
    supplierId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "sku" | "description" | "price" | "stock" | "minStock" | "imageUrl" | "status" | "categoryId" | "supplierId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
    movements?: boolean | Prisma.Product$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    supplier?: boolean | Prisma.Product$supplierArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs> | null;
        movements: Prisma.$InventoryMovementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        sku: string;
        description: string | null;
        price: runtime.Decimal;
        stock: number;
        minStock: number;
        imageUrl: string | null;
        status: $Enums.ProductStatus;
        categoryId: string | null;
        supplierId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.Product$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.Product$supplierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$supplierArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    movements<T extends Prisma.Product$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly sku: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly price: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly stock: Prisma.FieldRef<"Product", 'Int'>;
    readonly minStock: Prisma.FieldRef<"Product", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"Product", 'String'>;
    readonly status: Prisma.FieldRef<"Product", 'ProductStatus'>;
    readonly categoryId: Prisma.FieldRef<"Product", 'String'>;
    readonly supplierId: Prisma.FieldRef<"Product", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type Product$supplierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    where?: Prisma.SupplierWhereInput;
};
export type Product$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where?: Prisma.InventoryMovementWhereInput;
    orderBy?: Prisma.InventoryMovementOrderByWithRelationInput | Prisma.InventoryMovementOrderByWithRelationInput[];
    cursor?: Prisma.InventoryMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryMovementScalarFieldEnum | Prisma.InventoryMovementScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
