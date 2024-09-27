import { metaHeroesType } from "../src/models/index";

describe("metaHeroesType", () => {
  it('should include "hc"', () => {
    const key: metaHeroesType = "hc";
    expect(key).toBe("hc");
  });

  it('should include "mid"', () => {
    const key: metaHeroesType = "mid";
    expect(key).toBe("mid");
  });

  it('should include "off"', () => {
    const key: metaHeroesType = "off";
    expect(key).toBe("off");
  });

  it('should include "sup4"', () => {
    const key: metaHeroesType = "sup4";
    expect(key).toBe("sup4");
  });

  it('should include "sup5"', () => {
    const key: metaHeroesType = "sup5";
    expect(key).toBe("sup5");
  });

  it('should include "pos4"', () => {
    const key: metaHeroesType = "pos4";
    expect(key).toBe("pos4");
  });

  it('should include "pos5"', () => {
    const key: metaHeroesType = "pos5";
    expect(key).toBe("pos5");
  });
});
