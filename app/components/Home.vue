<template>
  <Page>
    <ActionBar>
      <Label text="Home"></Label>
    </ActionBar>
    <GridLayout>
      <Button text="Hello Mates" @tap="open" />
    </GridLayout>
  </Page>
</template>

<script>
import { openUrl } from "tns-core-modules/utils/utils";
import InAppBrowser from "nativescript-inappbrowser";
export default {
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  },
  methods: {
    open() {
      const url = "https://www.google.com";
      InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: "cancel",
        preferredBarTintColor: "#453AA4",
        preferredControlTintColor: "white",
        readerMode: false,
        animated: true,
        modalPresentationStyle: "fullScreen",
        modalTransitionStyle: "partialCurl",
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: "#6200EE",
        secondaryToolbarColor: "black",
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: "slide_in_right",
          startExit: "slide_out_left",
          endEnter: "slide_in_left",
          endExit: "slide_out_right"
        },
        headers: {
          "my-custom-header": "my custom header value"
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";
// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
