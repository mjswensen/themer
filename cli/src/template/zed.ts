import Color from 'color';
import type { Template } from './index.js';
import { colorSetToVariants, brightMix } from '../color-set/index.js';
import { source } from 'common-tags';

function hex(color: string): string {
  return Color(color).hex().toLowerCase();
}

function hexAlpha(color: string, alpha: number): string {
  const c = Color(color);
  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0');
  return `${c.hex().toLowerCase()}${a}`;
}

const template: Template = {
  name: 'Zed',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    yield {
      path: `${colorSet.title.kebab}.json`,
      content: JSON.stringify(
        {
          $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
          name: colorSet.title.human,
          author: 'Themer',
          themes: variants.map((variant) => ({
            name: variant.title.human,
            appearance: variant.isDark ? 'dark' : 'light',
            style: {
              'border': hexAlpha(variant.colors.shade3, 0.5),
              'border.variant': hexAlpha(variant.colors.shade2, 0.5),
              'border.focused': hexAlpha(variant.colors.accent5, 0.5),
              'border.selected': hexAlpha(variant.colors.accent4, 0.5),
              'border.transparent': '#00000000',
              'border.disabled': hexAlpha(variant.colors.shade1, 1),
              'elevated_surface': {
                background: hexAlpha(variant.colors.shade1, 1),
              },
              'surface': {
                background: hexAlpha(variant.colors.shade1, 1),
              },
              'background': hexAlpha(variant.colors.shade1, 1),
              'element.background': hexAlpha(variant.colors.shade1, 1),
              'element.hover': hexAlpha(variant.colors.shade2, 1),
              'element.active': hexAlpha(variant.colors.shade3, 1),
              'element.selected': hexAlpha(variant.colors.shade3, 1),
              'element.disabled': hexAlpha(variant.colors.shade1, 1),
              'drop_target.background': hexAlpha(variant.colors.shade4, 0.5),
              'ghost_element.background': '#00000000',
              'ghost_element.hover': hexAlpha(variant.colors.shade2, 1),
              'ghost_element.active': hexAlpha(variant.colors.shade3, 1),
              'ghost_element.selected': hexAlpha(variant.colors.shade3, 1),
              'ghost_element.disabled': hexAlpha(variant.colors.shade1, 1),
              'text': hexAlpha(variant.colors.shade7, 1),
              'text.muted': hexAlpha(variant.colors.shade5, 1),
              'text.placeholder': hexAlpha(variant.colors.shade4, 1),
              'text.disabled': hexAlpha(variant.colors.shade4, 1),
              'text.accent': hexAlpha(variant.colors.accent5, 1),
              'icon': hexAlpha(variant.colors.shade7, 1),
              'icon.muted': hexAlpha(variant.colors.shade5, 1),
              'icon.disabled': hexAlpha(variant.colors.shade4, 1),
              'icon.placeholder': hexAlpha(variant.colors.shade5, 1),
              'icon.accent': hexAlpha(variant.colors.accent5, 1),
              'status_bar.background': hexAlpha(variant.colors.shade1, 1),
              'title_bar.background': hexAlpha(variant.colors.shade1, 1),
              'title_bar.inactive_background': hexAlpha(
                variant.colors.shade0,
                1,
              ),
              'toolbar.background': hexAlpha(variant.colors.shade0, 1),
              'tab_bar.background': hexAlpha(variant.colors.shade1, 1),
              'tab.inactive_background': hexAlpha(variant.colors.shade1, 1),
              'tab.active_background': hexAlpha(variant.colors.shade0, 1),
              'search.match_background': hexAlpha(variant.colors.accent5, 0.4),
              'search.active_match_background': hexAlpha(
                variant.colors.accent2,
                0.4,
              ),
              'panel.background': hexAlpha(variant.colors.shade1, 1),
              'panel.focused_border': null,
              'pane.focused_border': null,
              'scrollbar.thumb.background': hexAlpha(
                variant.colors.shade4,
                0.3,
              ),
              'scrollbar.thumb.hover_background': hexAlpha(
                variant.colors.shade3,
                1,
              ),
              'scrollbar.thumb.border': hexAlpha(variant.colors.shade3, 1),
              'scrollbar.track.background': '#00000000',
              'scrollbar.track.border': hexAlpha(variant.colors.shade1, 1),
              'editor.foreground': hexAlpha(variant.colors.shade6, 1),
              'editor.background': hexAlpha(variant.colors.shade0, 1),
              'editor.gutter.background': hexAlpha(variant.colors.shade0, 1),
              'editor.subheader.background': hexAlpha(variant.colors.shade1, 1),
              'editor.active_line.background': hexAlpha(
                variant.colors.shade1,
                0.75,
              ),
              'editor.highlighted_line.background': hexAlpha(
                variant.colors.shade1,
                1,
              ),
              'editor.line_number': hex(variant.colors.shade3),
              'editor.active_line_number': hex(variant.colors.shade6),
              'editor.hover_line_number': hex(variant.colors.shade5),
              'editor.invisible': hex(variant.colors.shade3),
              'editor.wrap_guide': hexAlpha(variant.colors.shade4, 0.05),
              'editor.active_wrap_guide': hexAlpha(variant.colors.shade4, 0.1),
              'editor.document_highlight.read_background': hexAlpha(
                variant.colors.accent5,
                0.1,
              ),
              'editor.document_highlight.write_background': hexAlpha(
                variant.colors.shade4,
                0.4,
              ),
              'terminal.background': hexAlpha(variant.colors.shade0, 1),
              'terminal.foreground': hexAlpha(variant.colors.shade6, 1),
              'terminal.bright_foreground': hexAlpha(variant.colors.shade7, 1),
              'terminal.dim_foreground': hexAlpha(variant.colors.shade4, 1),
              'terminal.ansi.black': hexAlpha(
                variant.isDark ? variant.colors.shade0 : variant.colors.shade7,
                1,
              ),
              'terminal.ansi.bright_black': hexAlpha(
                variant.isDark ? variant.colors.shade2 : variant.colors.shade5,
                1,
              ),
              'terminal.ansi.dim_black': hexAlpha(
                variant.isDark ? variant.colors.shade1 : variant.colors.shade6,
                1,
              ),
              'terminal.ansi.red': hexAlpha(variant.colors.accent0, 1),
              'terminal.ansi.bright_red': hexAlpha(
                brightMix(variant.colors, 'accent0', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_red': hexAlpha(
                Color(variant.colors.accent0).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.green': hexAlpha(variant.colors.accent3, 1),
              'terminal.ansi.bright_green': hexAlpha(
                brightMix(variant.colors, 'accent3', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_green': hexAlpha(
                Color(variant.colors.accent3).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.yellow': hexAlpha(variant.colors.accent2, 1),
              'terminal.ansi.bright_yellow': hexAlpha(
                brightMix(variant.colors, 'accent2', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_yellow': hexAlpha(
                Color(variant.colors.accent2).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.blue': hexAlpha(variant.colors.accent5, 1),
              'terminal.ansi.bright_blue': hexAlpha(
                brightMix(variant.colors, 'accent5', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_blue': hexAlpha(
                Color(variant.colors.accent5).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.magenta': hexAlpha(variant.colors.accent7, 1),
              'terminal.ansi.bright_magenta': hexAlpha(
                brightMix(variant.colors, 'accent7', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_magenta': hexAlpha(
                Color(variant.colors.accent7).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.cyan': hexAlpha(variant.colors.accent4, 1),
              'terminal.ansi.bright_cyan': hexAlpha(
                brightMix(variant.colors, 'accent4', variant.isDark),
                1,
              ),
              'terminal.ansi.dim_cyan': hexAlpha(
                Color(variant.colors.accent4).darken(0.25).hex(),
                1,
              ),
              'terminal.ansi.white': hexAlpha(
                variant.isDark ? variant.colors.shade6 : variant.colors.shade1,
                1,
              ),
              'terminal.ansi.bright_white': hexAlpha(
                variant.isDark ? variant.colors.shade7 : variant.colors.shade0,
                1,
              ),
              'terminal.ansi.dim_white': hexAlpha(
                variant.isDark ? variant.colors.shade5 : variant.colors.shade2,
                1,
              ),
              'link_text.hover': hexAlpha(variant.colors.accent5, 1),
              'version_control.added': hexAlpha(variant.colors.accent3, 1),
              'version_control.modified': hexAlpha(variant.colors.accent2, 1),
              'version_control.deleted': hexAlpha(variant.colors.accent0, 1),
              'conflict': hexAlpha(variant.colors.accent2, 1),
              'conflict.background': hexAlpha(variant.colors.accent2, 0.1),
              'conflict.border': hexAlpha(variant.colors.accent2, 0.5),
              'created': hexAlpha(variant.colors.accent3, 1),
              'created.background': hexAlpha(variant.colors.accent3, 0.1),
              'created.border': hexAlpha(variant.colors.accent3, 0.5),
              'deleted': hexAlpha(variant.colors.accent0, 1),
              'deleted.background': hexAlpha(variant.colors.accent0, 0.1),
              'deleted.border': hexAlpha(variant.colors.accent0, 0.5),
              'error': hexAlpha(variant.colors.accent0, 1),
              'error.background': hexAlpha(variant.colors.accent0, 0.1),
              'error.border': hexAlpha(variant.colors.accent0, 0.5),
              'hidden': hexAlpha(variant.colors.shade4, 1),
              'hidden.background': hexAlpha(variant.colors.shade3, 0.1),
              'hidden.border': hexAlpha(variant.colors.shade3, 1),
              'hint': hexAlpha(variant.colors.accent5, 0.75),
              'hint.background': hexAlpha(variant.colors.accent5, 0.1),
              'hint.border': hexAlpha(variant.colors.accent5, 0.5),
              'ignored': hexAlpha(variant.colors.shade4, 1),
              'ignored.background': hexAlpha(variant.colors.shade3, 0.1),
              'ignored.border': hexAlpha(variant.colors.shade3, 1),
              'info': hexAlpha(variant.colors.accent5, 1),
              'info.background': hexAlpha(variant.colors.accent5, 0.1),
              'info.border': hexAlpha(variant.colors.accent5, 0.5),
              'modified': hexAlpha(variant.colors.accent2, 1),
              'modified.background': hexAlpha(variant.colors.accent2, 0.1),
              'modified.border': hexAlpha(variant.colors.accent2, 0.5),
              'predictive': hexAlpha(variant.colors.shade4, 1),
              'predictive.background': hexAlpha(variant.colors.shade3, 0.1),
              'predictive.border': hexAlpha(variant.colors.shade3, 0.5),
              'renamed': hexAlpha(variant.colors.accent5, 1),
              'renamed.background': hexAlpha(variant.colors.accent5, 0.1),
              'renamed.border': hexAlpha(variant.colors.accent5, 0.5),
              'success': hexAlpha(variant.colors.accent3, 1),
              'success.background': hexAlpha(variant.colors.accent3, 0.1),
              'success.border': hexAlpha(variant.colors.accent3, 0.5),
              'unreachable': hexAlpha(variant.colors.shade5, 1),
              'unreachable.background': hexAlpha(variant.colors.shade4, 0.1),
              'unreachable.border': hexAlpha(variant.colors.shade3, 1),
              'warning': hexAlpha(variant.colors.accent2, 1),
              'warning.background': hexAlpha(variant.colors.accent2, 0.1),
              'warning.border': hexAlpha(variant.colors.accent2, 0.5),
              'players': [
                {
                  cursor: hexAlpha(variant.colors.accent6, 1),
                  background: hexAlpha(variant.colors.accent6, 1),
                  selection: hexAlpha(variant.colors.accent6, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent0, 1),
                  background: hexAlpha(variant.colors.accent0, 1),
                  selection: hexAlpha(variant.colors.accent0, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent1, 1),
                  background: hexAlpha(variant.colors.accent1, 1),
                  selection: hexAlpha(variant.colors.accent1, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent7, 1),
                  background: hexAlpha(variant.colors.accent7, 1),
                  selection: hexAlpha(variant.colors.accent7, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent4, 1),
                  background: hexAlpha(variant.colors.accent4, 1),
                  selection: hexAlpha(variant.colors.accent4, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent3, 1),
                  background: hexAlpha(variant.colors.accent3, 1),
                  selection: hexAlpha(variant.colors.accent3, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent2, 1),
                  background: hexAlpha(variant.colors.accent2, 1),
                  selection: hexAlpha(variant.colors.accent2, 0.24),
                },
                {
                  cursor: hexAlpha(variant.colors.accent5, 1),
                  background: hexAlpha(variant.colors.accent5, 1),
                  selection: hexAlpha(variant.colors.accent5, 0.24),
                },
              ],
              'syntax': {
                'attribute': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'boolean': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'comment': {
                  color: hexAlpha(variant.colors.shade3, 1),
                  font_style: 'italic',
                  font_weight: null,
                },
                'comment.doc': {
                  color: hexAlpha(variant.colors.shade4, 1),
                  font_style: 'italic',
                  font_weight: null,
                },
                'constant': {
                  color: hexAlpha(variant.colors.accent2, 1),
                  font_style: null,
                  font_weight: null,
                },
                'constructor': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'embedded': {
                  color: hexAlpha(variant.colors.shade7, 1),
                  font_style: null,
                  font_weight: null,
                },
                'emphasis': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: 'italic',
                  font_weight: null,
                },
                'emphasis.strong': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: 700,
                },
                'enum': {
                  color: hexAlpha(variant.colors.accent4, 1),
                  font_style: null,
                  font_weight: null,
                },
                'function': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'hint': {
                  color: hexAlpha(variant.colors.accent5, 0.75),
                  font_style: null,
                  font_weight: null,
                },
                'keyword': {
                  color: hexAlpha(variant.colors.accent7, 1),
                  font_style: null,
                  font_weight: null,
                },
                'label': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'link_text': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: 'italic',
                  font_weight: null,
                },
                'link_uri': {
                  color: hexAlpha(variant.colors.accent4, 1),
                  font_style: null,
                  font_weight: null,
                },
                'namespace': {
                  color: hexAlpha(variant.colors.shade7, 1),
                  font_style: null,
                  font_weight: null,
                },
                'number': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'operator': {
                  color: hexAlpha(variant.colors.accent4, 1),
                  font_style: null,
                  font_weight: null,
                },
                'predictive': {
                  color: hexAlpha(variant.colors.shade4, 1),
                  font_style: 'italic',
                  font_weight: null,
                },
                'preproc': {
                  color: hexAlpha(variant.colors.accent7, 1),
                  font_style: null,
                  font_weight: null,
                },
                'primary': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'property': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation.bracket': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation.delimiter': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation.list_marker': {
                  color: hexAlpha(variant.colors.accent0, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation.markup': {
                  color: hexAlpha(variant.colors.accent0, 1),
                  font_style: null,
                  font_weight: null,
                },
                'punctuation.special': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'selector': {
                  color: hexAlpha(variant.colors.accent2, 1),
                  font_style: null,
                  font_weight: null,
                },
                'selector.pseudo': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'string': {
                  color: hexAlpha(variant.colors.accent3, 1),
                  font_style: null,
                  font_weight: null,
                },
                'string.escape': {
                  color: hexAlpha(variant.colors.shade4, 1),
                  font_style: null,
                  font_weight: null,
                },
                'string.regex': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'string.special': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'string.special.symbol': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'tag': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
                'text.literal': {
                  color: hexAlpha(variant.colors.accent3, 1),
                  font_style: null,
                  font_weight: null,
                },
                'title': {
                  color: hexAlpha(variant.colors.accent0, 1),
                  font_style: null,
                  font_weight: 400,
                },
                'type': {
                  color: hexAlpha(variant.colors.accent4, 1),
                  font_style: null,
                  font_weight: null,
                },
                'variable': {
                  color: hexAlpha(variant.colors.shade6, 1),
                  font_style: null,
                  font_weight: null,
                },
                'variable.special': {
                  color: hexAlpha(variant.colors.accent1, 1),
                  font_style: null,
                  font_weight: null,
                },
                'variant': {
                  color: hexAlpha(variant.colors.accent5, 1),
                  font_style: null,
                  font_weight: null,
                },
              },
            },
          })),
        },
        null,
        2,
      ),
    };
  },
  renderInstructions: (paths, colorSet) => source`
    1. Copy the generated file (${paths
      .map((p) => `\`${p}\``)
      .join(' or ')}) to \`~/.config/zed/themes/\`
    2. Open Zed
    3. Open the command palette with \`Cmd+Shift+P\` (macOS) or \`Ctrl+Shift+P\` (Linux)
    4. Search for and select \`theme selector: Toggle\`
    5. Select ${colorSetToVariants(colorSet)
      .map((v) => `'${v.title.human}'`)
      .join(' or ')}
  `,
};

export default template;
