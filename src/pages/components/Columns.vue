<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/columns.ts";

import ColumnsAligmentCode from "../../docs/components/raw/Columns/ColumnsAligment.txt";
import ColumnsBasicCode from "../../docs/components/raw/Columns/ColumnsBasic.txt";
import ColumnsGapCode from "../../docs/components/raw/Columns/ColumnsGap.txt";
import ColumnsMultilineCode from "../../docs/components/raw/Columns/ColumnsMultiline.txt";
import ColumnsNarrowCode from "../../docs/components/raw/Columns/ColumnsNarrow.txt";
import ColumnsNestedCode from "../../docs/components/raw/Columns/ColumnsNested.txt";
import ColumnsOffsetCode from "../../docs/components/raw/Columns/ColumnsOffset.txt";
import ColumnsSizesCode from "../../docs/components/raw/Columns/ColumnsSizes.txt";
// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from "../../docs/components/showcases/Columns";

export default {
  name: "DevPageColumns",
  components: { ApiSection, SnippetSection },
  setup() {
    const router = useRouter();
    return {
      api,
      router,
      Showcases,
      ColumnsBasicCode,
      ColumnsSizesCode,
      ColumnsOffsetCode,
      ColumnsNestedCode,
      ColumnsNarrowCode,
      ColumnsMultilineCode,
      ColumnsGapCode,
      ColumnsAligmentCode,
    };
  },
};
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>
    <snippet-section title="Basic" :code="ColumnsBasicCode" :component="Showcases.ColumnsBasic"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Sizes" :code="ColumnsSizesCode" :component="Showcases.ColumnsSizes"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Offset" :code="ColumnsOffsetCode" :component="Showcases.ColumnsOffset"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Narrow" :code="ColumnsNarrowCode" :component="Showcases.ColumnsNarrow"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Nested" :code="ColumnsNestedCode" :component="Showcases.ColumnsNested"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Gap" :code="ColumnsGapCode" :component="Showcases.ColumnsGap"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Aligment" :code="ColumnsAligmentCode" :component="Showcases.ColumnsAligment"
      :path="router.currentRoute.value.path" />
    <snippet-section title="Multiline" :code="ColumnsMultilineCode" :component="Showcases.ColumnsMultiline"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
