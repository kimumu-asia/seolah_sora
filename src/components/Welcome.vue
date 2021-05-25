<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="pa-10"
        md="6"
      >
        <div class="l-heading">
          <h1 class="newsreader text-h1">
            Focus on
          </h1>
          <h1 class="newsreader text-h1 info--text">
            Five
          </h1>
        </div>
        <v-btn
          class="mt-4 transparent"
          elevation="0"
        >
          <v-icon
            dark
            size="52"
            class="info--text"
            v-text="'mdi-chevron-down'"
          />
        </v-btn>
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          />
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="sass">
.l-heading
  padding: 200px 0 0
</style>
