import React, { useState, useContext } from 'react';
import Checkbox from './Checkbox';
import styles from './Download.module.css';
import Button from './Button';
import generateZip from './generateZip';
import saveAs from 'file-saver';
import ThemeContext from './ThemeContext';

export default () => {
  const [alacritty, setAlacritty] = useState(false);
  const [hyper, setHyper] = useState(false);
  const [iterm, setIterm] = useState(false);
  const [gnomeTerminal, setGnomeTerminal] = useState(false);
  const [conemu, setConemu] = useState(false);
  const [cmd, setCmd] = useState(false);
  const [termite, setTermite] = useState(false);
  const [kitty, setKitty] = useState(false);
  const [atomSyntax, setAtomSyntax] = useState(false);
  const [atomUi, setAtomUi] = useState(false);
  const [sublimeText, setSublimeText] = useState(false);
  const [vim, setVim] = useState(false);
  const [vimLightline, setVimLightline] = useState(false);
  const [vscode, setVscode] = useState(false);
  const [xcode, setXcode] = useState(false);
  const [bbedit, setBbedit] = useState(false);
  const [jetbrains, setJetbrains] = useState(false);
  const [wallpaperBlockWave, setWallpaperBlockWave] = useState(false);
  const [wallpaperDiamonds, setWallpaperDiamonds] = useState(false);
  const [wallpaperOctagon, setWallpaperOctagon] = useState(false);
  const [wallpaperTriangles, setWallpaperTriangles] = useState(false);
  const [wallpaperTrianglify, setWallpaperTrianglify] = useState(false);
  const [wallpaperShirts, setWallpaperShirts] = useState(false);
  const [slack, setSlack] = useState(false);
  const [alfred, setAlfred] = useState(false);
  const [brave, setBrave] = useState(false);
  const [chrome, setChrome] = useState(false);
  const [firefox, setFirefox] = useState(false);
  const [sketchPalettes, setSketchPalettes] = useState(false);
  const [tmux, setTmux] = useState(false);
  const [prism, setPrism] = useState(false);

  const { getActiveColorOrFallback, preparedColorSet, cliColorSet } = useContext(ThemeContext);

  return (
    <>
      <div className={ styles.fieldsetWrapper }>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Terminals</legend>
          <Checkbox
            value={ alacritty }
            onChange={ () => setAlacritty(!alacritty) }
            label="Alacritty"
            accentSelected
          />
          <Checkbox
            value={ hyper }
            onChange={ () => setHyper(!hyper) }
            label="Hyper"
            accentSelected
          />
          <Checkbox
            value={ iterm }
            onChange={ () => setIterm(!iterm) }
            label="iTerm"
            accentSelected
          />
          <Checkbox
            value={ gnomeTerminal }
            onChange={ () => setGnomeTerminal(!gnomeTerminal) }
            label="GNOME Terminal"
            accentSelected
          />
          <Checkbox
            value={ conemu }
            onChange={ () => setConemu(!conemu) }
            label="ConEmu"
            accentSelected
          />
          <Checkbox
            value={ cmd }
            onChange={ () => setCmd(!cmd) }
            label="CMD.exe"
            accentSelected
          />
          <Checkbox
            value={ termite }
            onChange={ () => setTermite(!termite) }
            label="Termite"
            accentSelected
          />
          <Checkbox
            value={ kitty }
            onChange={ () => setKitty(!kitty) }
            label="kitty"
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Editors / IDEs</legend>
          <Checkbox
            value={ atomSyntax }
            onChange={ () => setAtomSyntax(!atomSyntax) }
            label="Atom (syntax)"
            accentSelected
          />
          <Checkbox
            value={ atomUi }
            onChange={ () => setAtomUi(!atomUi) }
            label="Atom (UI)"
            accentSelected
          />
          <Checkbox
            value={ sublimeText }
            onChange={ () => setSublimeText(!sublimeText) }
            label="Sublime Text"
            accentSelected
          />
          <Checkbox
            value={ vim }
            onChange={ () => setVim(!vim) }
            label="Vim"
            accentSelected
          />
          <Checkbox
            value={ vimLightline }
            onChange={ () => setVimLightline(!vimLightline) }
            label="lightline.vim"
            accentSelected
          />
          <Checkbox
            value={ vscode }
            onChange={ () => setVscode(!vscode) }
            label="VS Code"
            accentSelected
          />
          <Checkbox
            value={ xcode }
            onChange={ () => setXcode(!xcode) }
            label="Xcode"
            accentSelected
          />
          <Checkbox
            value={ bbedit }
            onChange={ () => setBbedit(!bbedit) }
            label="BBEdit"
            accentSelected
          />
          <Checkbox
            value={ jetbrains }
            onChange={ () => setJetbrains(!jetbrains) }
            label="JetBrains"
            accentSelected
          />
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Wallpapers</legend>
          <Checkbox
            value={ wallpaperBlockWave }
            onChange={ () => setWallpaperBlockWave(!wallpaperBlockWave) }
            label="“Block Wave”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperDiamonds }
            onChange={ () => setWallpaperDiamonds(!wallpaperDiamonds) }
            label="“Diamonds”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperOctagon }
            onChange={ () => setWallpaperOctagon(!wallpaperOctagon) }
            label="“Octagon”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperTriangles }
            onChange={ () => setWallpaperTriangles(!wallpaperTriangles) }
            label="“Triangles”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperTrianglify }
            onChange={ () => setWallpaperTrianglify(!wallpaperTrianglify) }
            label="“Trianglify”"
            accentSelected
          />
          <Checkbox
            value={ wallpaperShirts }
            onChange={ () => setWallpaperShirts(!wallpaperShirts) }
            label="“Shirts”"
            accentSelected
          />
          <div
            className={ styles.wallpaperHint }
            style={{ color: getActiveColorOrFallback(['shade3']) }}
          >
            Wallpapers will be rendered at the browser viewport's resolution.
          </div>
          { window.document.fullscreenEnabled ? (
            <Button
              className={ styles.fullscreen }
              small
              onClick={
                () => window.document.documentElement.requestFullscreen()
              }
            >Go fullscreen</Button>
          ) : null }
        </fieldset>
        <fieldset style={{ borderColor: getActiveColorOrFallback(['shade2']) }}>
          <legend style={{ color: getActiveColorOrFallback(['shade5']) }}>Other</legend>
          <Checkbox
            value={ slack }
            onChange={ () => setSlack(!slack) }
            label="Slack sidebar"
            accentSelected
          />
          <Checkbox
            value={ alfred }
            onChange={ () => setAlfred(!alfred) }
            label="Alfred.app"
            accentSelected
          />
          <Checkbox
            value={ brave }
            onChange={ () => setBrave(!brave) }
            label="Brave"
            accentSelected
          />
          <Checkbox
            value={ chrome }
            onChange={ () => setChrome(!chrome) }
            label="Chrome"
            accentSelected
          />
          <Checkbox
            value={ firefox }
            onChange={ () => setFirefox(!firefox) }
            label="Firefox"
            accentSelected
          />
          <Checkbox
            value={ sketchPalettes }
            onChange={ () => setSketchPalettes(!sketchPalettes) }
            label="Sketch palettes"
            accentSelected
          />
          <Checkbox
            value={ tmux }
            onChange={ () => setTmux(!tmux) }
            label="tmux"
            accentSelected
          />
          <Checkbox
            value={ prism }
            onChange={ () => setPrism(!prism) }
            label="Prism"
            accentSelected
          />
        </fieldset>
      </div>
      <Button
        special
        disabled={ !preparedColorSet.dark && !preparedColorSet.light }
        onClick={ async () => {
          const zip = await generateZip(
            {
              alacritty,
              hyper,
              iterm,
              gnomeTerminal,
              conemu,
              cmd,
              termite,
              kitty,
              atomSyntax,
              atomUi,
              sublimeText,
              vim,
              vimLightline,
              vscode,
              xcode,
              bbedit,
              jetbrains,
              wallpaperBlockWave,
              wallpaperDiamonds,
              wallpaperOctagon,
              wallpaperTriangles,
              wallpaperTrianglify,
              wallpaperShirts,
              slack,
              alfred,
              brave,
              chrome,
              sketchPalettes,
              tmux,
              prism,
            },
            preparedColorSet,
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio,
            window.location.href,
            cliColorSet,
          );
          zip.generateAsync({ type: 'blob' }).then(contents => {
            saveAs(contents, 'themer.zip');
          });
        } }
      >Download</Button>
    </>
  );
}
