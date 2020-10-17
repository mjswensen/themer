const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('themer "octagon" wallpaper', () => {

  const test = (scenario, colors, totalDefaultFiles) => {

    describe(scenario, () => {

      describe('and when rendering only default resolutions', () => {
        const promises = render(colors, {});

        it(`should return ${totalDefaultFiles} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles);
          expect(files.filter(file => /\.png/.test(file.name)).length).toBe(totalDefaultFiles);
        });

      });

      describe('and when rendering a given resolution', () => {
        const promises = render(colors, { 'themer-wallpaper-octagon-size': '600x600' });

        it(`should return ${totalDefaultFiles / 2} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles / 2);
          expect(files.filter(file => /\.png/.test(file.name)).length).toBe(totalDefaultFiles / 2);
        });

      });

    });

  };

  test('when given both a light and a dark theme', colors, 4);
  test('when given only a dark theme', { dark: colors.dark }, 2);
  test('when given only a light theme', { light: colors.light }, 2);

  it('should list output files', async () => {
    const files = await Promise.all(render(colors, { 'themer-wallpaper-octagon-size': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });

});
