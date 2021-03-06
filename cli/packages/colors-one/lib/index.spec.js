const { colors } = require('./index');

describe('One colors', () => {
  it('should contain both a light and a dark theme', () => {
    expect(colors.light).toBeDefined();
    expect(colors.dark).toBeDefined();
  });

  it('should define all 16 required colors for each theme', () => {
    const prefixes = ['accent', 'shade'];
    prefixes.forEach((prefix) => {
      for (let i = 0; i <= 7; i++) {
        expect(colors.light[`${prefix}${i}`]).toHaveLength(7);
        expect(colors.dark[`${prefix}${i}`]).toHaveLength(7);
      }
    });
  });
});
