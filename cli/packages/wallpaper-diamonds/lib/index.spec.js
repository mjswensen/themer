const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer "diamonds" wallpaper', () => {
  it(`should return 4 PNG files to write`, async () => {
    const files = await Promise.all(render(colors, {}));
    expect(files.length).toBe(4);
    expect(files.filter(file => /\.png/.test(file.name)).length).toBe(4);
  });
  it('should list output files', async () => {
    const files = await Promise.all(render(colors, { 'themer-wallpaper-diamonds-size': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
