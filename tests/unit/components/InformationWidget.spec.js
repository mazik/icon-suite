import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import InformationWidget from "@/components/InformationWidget";

describe("InformationWidget.vue", () => {
  let wrapper;

  const data = {
    current: {
      author: "svg",
      date: "2020-02-01T22:52:12.739Z",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 16v5a1 1 0 01-1 1H9l-3-6a2 2 0 01-2-2 2 2 0 01-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 012 2v14a2 2 0 01-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/></svg>',
      name: "icon-announcement.svg",
      path:
        "/Users/mazik/Downloads/new-icons/heroicons-ui/svg/icon-announcement.svg",
      size: 344
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(InformationWidget, {
      propsData: data
    });
  });

  it("renders props data when passed", () => {
    expect(
      wrapper.find('[data-testid="information-widget-icon-name"]').text()
    ).to.include(wrapper.vm.name(data.current.name));
    expect(
      wrapper.find('[data-testid="information-widget-icon-size"]').text()
    ).to.include(wrapper.vm.size(data.current.size));
    expect(
      wrapper
        .find('[data-testid="information-widget-icon-created-date"]')
        .text()
    ).to.include(wrapper.vm.date(data.current.date));
  });

  it("strips extension from the file name", () => {
    expect(wrapper.vm.name(data.current.name)).to.equal("icon-announcement");
  });

  it("shows formatted file size based on the Byte", () => {
    expect(wrapper.vm.size(data.current.size)).to.equal(
      `${data.current.size} B`
    );
    expect(wrapper.vm.size(1025)).to.equal("1 KB");
    expect(wrapper.vm.size(1050000)).to.equal("1 MB");
  });

  it("shows formatted date based on the given Date string", () => {
    expect(wrapper.vm.date(data.current.date)).to.equal(
      new Date("2/2/2020").toLocaleDateString()
    );
  });
});
