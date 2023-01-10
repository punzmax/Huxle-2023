import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainTitle from "@/components/Shared/TitleBlocks/MainTitle.vue";
import DefaultButton from "@/components/Shared/FormElements/DefaultButton.vue";
import KeyBoardKey from "@/components/Shared/Keyboard/KeyBoardKey.vue";

describe("MainTitle", () => {
  it("renders properly", () => {
    const wrapper = mount(MainTitle, { props: { text: "Hello Title" } });
    expect(wrapper.text()).toEqual("Hello Title");
  });
});

describe("DefaultButton", () => {
  it("renders properly", () => {
    const wrapper = mount(DefaultButton, { props: { text: "Hello Button" } });
    expect(wrapper.text()).toEqual("Hello Button");
  });
});

describe("KeyBoardKey", () => {
  it("renders properly", () => {
    const wrapper = mount(KeyBoardKey, { props: { value: "Hello Key" } });
    expect(wrapper.text()).toEqual("Hello Key");
  });
});
