import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CustomizerPanel from "@/components/CustomizerPanel";

describe("CustomizerPanel.vue", () => {
  it("show no selection message when no icon is selected", () => {
    const wrapper = shallowMount(CustomizerPanel, {
      propsData: {
        isIconSelected: false,
        currentIcon: {}
      }
    });

    expect(wrapper.find("p").element.textContent).to.equal("No selection");
  });

  it("show only when an icon is selected", () => {
    const wrapper = shallowMount(CustomizerPanel, {
      propsData: {
        isIconSelected: true,
        currentIcon: {
          author: "svg",
          date: "2020-02-01T22:52:12.739Z",
          icon:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 16v5a1 1 0 01-1 1H9l-3-6a2 2 0 01-2-2 2 2 0 01-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 012 2v14a2 2 0 01-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/></svg>',
          name: "icon-announcement.svg",
          path:
            "/Users/mazik/Downloads/new-icons/heroicons-ui/svg/icon-announcement.svg",
          size: 344
        }
      }
    });

    expect(
      wrapper.find('[data-testid="customizer-panel-show"]').isVisible()
    ).to.equal(true);
  });
});
