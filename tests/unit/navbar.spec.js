import AppNavbar from "@/components/AppNavbar.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

describe("AppNavbar.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Hello World!";
    const wrapper = shallowMount(AppNavbar, { propsData: { title } });

    expect(wrapper.text()).to.include(title);
  });
});
