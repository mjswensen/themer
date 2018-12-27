import React, { PureComponent } from 'react';
import { UrlStateConsumer, paramsFromState } from './UrlState';
import ColorState from './ColorState';
import { has } from 'lodash';
import styles from './PreBuiltList.module.css';

import { colors as defaultColors } from 'themer-colors-default';
import { colors as nightSkyColors } from 'themer-colors-night-sky';
import { colors as polarIceColors } from 'themer-colors-polar-ice';
import { colors as fingerPaintColors} from 'themer-colors-finger-paint';
import { colors as monkeyColors } from 'themer-colors-monkey';
import { colors as oneColors } from 'themer-colors-one';
import { colors as lucidColors } from 'themer-colors-lucid';
import { colors as solarizedColors } from 'themer-colors-solarized';
import { colors as githubUniverseColors } from 'themer-colors-github-universe';
import { colors as novaColors } from 'themer-colors-nova';

class PreBuiltLink extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback }) => {
          const activeColorSet = getValueOrFallback([['activeColorSet']]);
          const oppositeColorSet = activeColorSet === 'dark' ? 'light' : 'dark';
          const preparedState = {
            colors: this.props.colors,
            activeColorSet: has(this.props.colors, activeColorSet) ? activeColorSet : oppositeColorSet,
            calculateIntermediaryShades: {
              dark: !has(this.props.colors, 'dark.shade1'),
              light: !has(this.props.colors, 'light.shade1'),
            },
          };
          return (
            <ColorState>
              { ({ getColor }) => (
                <a style={{ color: getColor('accent5', 'shade7') }} href={ paramsFromState(preparedState) }>{ this.props.children }</a>
              ) }
            </ColorState>
          );
        } }
      </UrlStateConsumer>
    );
  }
}

export default class PreBuiltList extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <ul className={ styles.linksets } style={{ color: getColor('shade5', 'shade7') }}>
            <li>
              Original color sets:
              {' '}
              <ul className={ styles.links } >
                <li><PreBuiltLink colors={ defaultColors }>Default</PreBuiltLink></li>
                <li><PreBuiltLink colors={ nightSkyColors }>Night Sky</PreBuiltLink></li>
                <li><PreBuiltLink colors={ polarIceColors }>Polar Ice</PreBuiltLink></li>
                <li><PreBuiltLink colors={ fingerPaintColors }>Finger Paint</PreBuiltLink></li>
                <li><PreBuiltLink colors={ monkeyColors }>Monkey</PreBuiltLink></li>
              </ul>
            </li>
            <li>
              Ports from third party themes:
              {' '}
              <ul className={ styles.links }>
                <li><PreBuiltLink colors={ oneColors }>One</PreBuiltLink></li>
                <li><PreBuiltLink colors={ lucidColors }>Lucid</PreBuiltLink></li>
                <li><PreBuiltLink colors={ solarizedColors }>Solarized</PreBuiltLink></li>
                <li><PreBuiltLink colors={ githubUniverseColors }>GitHub Universe</PreBuiltLink></li>
                <li><PreBuiltLink colors={ novaColors }>Nova</PreBuiltLink></li>
              </ul>
            </li>
          </ul>
        ) }
      </ColorState>
    );
  }
}