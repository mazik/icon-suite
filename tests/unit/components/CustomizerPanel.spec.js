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

  describe("When the current icon is fully optimized", () => {
    let wrapper;

    const data = {
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
    };

    beforeEach(() => {
      wrapper = shallowMount(CustomizerPanel, {
        propsData: data
      });
    });

    it("set default width and height in the SVG path", () => {
      expect(wrapper.vm.customizedSvg).to.contain(
        `width="${wrapper.vm.dimension}" height="${wrapper.vm.dimension}"`
      );
    });

    it("add stroke width in the SVG path when enabled", () => {
      wrapper.find("#stroke").setChecked();

      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-width="${wrapper.vm.strokeWidth}"`
      );
    });

    it("dodes not add stroke width in the SVG path when not enabled", () => {
      wrapper.find("#stroke").setChecked(false);

      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke-width="${wrapper.vm.strokeWidth}"`
      );
    });

    it("add fill color in the SVG path when enabled", () => {
      wrapper.find("#fill-color").setChecked();

      expect(wrapper.vm.customizedSvg).to.contain(`fill="${wrapper.vm.fill}"`);
    });

    it("does not add fill color in the SVG path when not enabled", () => {
      wrapper.find("#fill-color").setChecked(false);

      expect(wrapper.vm.customizedSvg).to.not.contain(
        `fill="${wrapper.vm.fill}"`
      );
    });

    it("add stroke color in the SVG path when enabled", () => {
      wrapper.find("#stroke-color").setChecked();

      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke="${wrapper.vm.stroke}"`
      );
    });

    it("does not add stroke color in the SVG path when not enabled", () => {
      wrapper.find("#stroke-color").setChecked(false);

      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke="${wrapper.vm.stroke}"`
      );
    });

    it("add stroke-linecap default style in the SVG path when enabled", () => {
      wrapper.find("#strokeLineCap").setChecked();

      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );
    });

    it("does not add default stroke-linecap style in the SVG path when not enabled", () => {
      wrapper.find("#strokeLineCap").setChecked(false);

      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );
    });

    it("add stroke-linecap selected style in the SVG icon path when enabled", () => {
      wrapper.find("#strokeLineCap").setChecked();

      wrapper.find("#butt").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );

      wrapper.find("#round").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );

      wrapper.find("#square").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );

      wrapper.find("#strokeLineCap").setChecked(false);
      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );
    });

    it("add stroke-linejoin default style in the SVG path when enabled", () => {
      wrapper.find("#strokeLineJoin").setChecked();

      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );
    });

    it("does not add default stroke-linejoin style in the SVG path when not enabled", () => {
      wrapper.find("#strokeLineJoin").setChecked(false);

      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );
    });

    it("add stroke-linejoin selected style in the SVG path when enabled", () => {
      wrapper.find("#strokeLineJoin").setChecked();

      wrapper.find("#miter").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );

      wrapper.find("#strokeLineJoinRound").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );

      wrapper.find("#bevel").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );

      wrapper.find("#miter-clip").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );

      wrapper.find("#arcs").setChecked();
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );

      wrapper.find("#strokeLineJoin").setChecked(false);
      expect(wrapper.vm.customizedSvg).to.not.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );
    });
  });

  describe("When the current icon isn't optimized", () => {
    let wrapper;

    const data = {
      isIconSelected: true,
      currentIcon: {
        author: "outline-md",
        date: "2020-03-09T12:09:07.436Z",
        icon:
          '<svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        name: "md-adjustments.svg",
        path:
          "/Users/mazik/Downloads/new-icons/heroicons/src/outline-md/md-adjustments.svg",
        size: 601
      }
    };

    beforeEach(() => {
      wrapper = shallowMount(CustomizerPanel, {
        propsData: data
      });
    });

    it("detects stroke width in the SVG path when present and enable the relevant options", () => {
      wrapper.vm.defaultStrokeWidth(data.currentIcon.icon);

      expect(wrapper.vm.isStrokeWidthEnable).is.equal(true);
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-width="${wrapper.vm.strokeWidth}"`
      );
    });

    it("detects fill color in the SVG path when present and enable the relevant option", () => {
      wrapper.vm.defaultFill(data.currentIcon.icon);

      expect(wrapper.vm.isFillEnable).is.equal(true);
      expect(wrapper.vm.customizedSvg).to.contain(`fill="${wrapper.vm.fill}"`);
    });

    it("detects stroke color in the SVG path when present and enable the relevant option", () => {
      wrapper.vm.defaultStroke(data.currentIcon.icon);

      expect(wrapper.vm.isStrokeEnable).is.equal(true);
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke="${wrapper.vm.stroke}"`
      );
    });

    it("detects stroke-linecap style in the SVG path when present and enable the relevant option", () => {
      wrapper.vm.defaultStrokeLineCap(data.currentIcon.icon);

      expect(wrapper.vm.isStrokeLineCapEnable).is.equal(true);
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linecap="${wrapper.vm.strokeLineCap}"`
      );
    });

    it("detects stroke-linejoin style in the SVG path when present and enable the relevant option", () => {
      wrapper.vm.defaultStrokeLineJoin(data.currentIcon.icon);

      expect(wrapper.vm.isStrokeLineJoinEnable).is.equal(true);
      expect(wrapper.vm.customizedSvg).to.contain(
        `stroke-linejoin="${wrapper.vm.strokeLineJoin}"`
      );
    });
  });
});
