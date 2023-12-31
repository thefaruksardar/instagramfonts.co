"use client";
import TextContainer from "@/components/textcontainer";
import Image from "next/image";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import {
  dummy,
  futureAlienCharMap,
  longTextBubblesMap,
  frakturMap,
  crypticItalicMap,
  mathSansMap,
  scriptBoldItalicMap,
  fairytaleMap,
  heartsMap,
  emojisTextMap,
  darkTextBubblesMap,
  frakturBoldMap,
  monospaceTextMap,
  subscriptMap,
  superscriptMap,
  fullWidthMap,
  parenthesisMap,
  wizardMap,
  lefthandedMap,
  darkTextSquaresMap,
  lightTextSquaresMap,
  doubleStruckMap,
  cyrillicMap,
  mirroredFlippedMap,
  japaneseMap,
  arabicMap,
  invertedMap,
  mathSansBoldItalicMap,
  diagonalStrikesMap,
  ancientStyle1Map,
  dotSeparatedMap,
  mixedStyle1Map,
  handwritingMap,
  acuteAccentsMap,
  modernGreekMap,
  underlinedByDashesMap,
  linedUpMap,
  mixedStyle2Map,
  upAndDownMap,
  europeanCharactersMap,
  asianCharactersMap,
  monoUpperMap,
  darkBracketsMap,
  devlishMap,
  metalÜmlautsMap,
  curvyMap,
  mathSansItalicMap,
  boxedinMap,
  arrowsMap,
  mixedStyle3Map,
  mathItalicMap,
  bandaidMap,
  deltaMap,
  mathStyleMap,
  windyMap,
  strikethroughMap,
  xCrossMap,
  yataganMap,
  sovietMap,
  xeperatedMap,
  strokedMap,
  mathBoldMap,
  linesLinesLinesMap,
  anchorStyleMap,
  printStampMap,
  hookBracketsMap,
  doubleStrokesMap,
  shadowMap,
  fireworksMap,
  pointingBackMap,
  pointingForwardMap,
  airQuotesMap,
  manuscriptMap,
  wavyMap,
  doubleUnderlinesMap,
  doubleDoubleDotsMap,
  hourglassMap,
  crypticMap,
  doubleLinesMap,
  censoredMap,
  musicBarsMap,
  allTheWayUpMap,
  cometTailMap,
  wiseCharactersMap,
  hotMap,
  mathSansBoldMap,
  ancientStyle2Map,
  ancientStyle3Map,
  dottedPatternMap,
  foodEmojisMap,
  Code737Map,
  triangleBracketsMap,
  heavyArrowBracketsMap,
  jumpyTextMap,
  tentVillageMap,
  funkyMap,
  colonsMap,
  threeVerticalDotsMap,
  yodaMap,
  fahrenheitMap,
  weirdText1Map,
  fauxCyrillicMap,
  betweenLinesMap,
  lenticularLensMap,
  doubleParenthesesMap,
  bubblyMap,
  iceyMap,
  volumeMap,
  princessStyleMap,
  underscoresMap,
  mysteriousMap,
  fauxEthiopianMap,
  umbrellaStyleMap,
  countryCodesMap,
  rightDirectionAboveMap,
  rightDirectionUnderMap,
  hieroglyphsMap,
  swimmingInTheSeaMap,
  curvedTextMap,
  orthodoxMap,
  currenciesMap,
  stackedAboveMap,
  hebrewMap,
  dashedMap,
  zMathMap,
  drinksEmojisMap,
  weirdText2Map,
  weirdText3Map,
  weirdText4Map,
  wavedTextMap,
  bubblyBubblesMap,
  sweetsEmojisMap,
  squareBracketsMap,
  crossItUnderMap,
  rainOnTopMap,
  bubblesOnTopMap,
  allLowercaseMap,
  allUppercaseMap,
  sentencecaseMap,
  titleCaseMap,
  alternatingCaseMap,
} from "@/libs/fancytextsdata";

interface Mapping {
  [key: string]: string;
}

const SymbolConverter: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [convertedText, setConvertedText] =
    useState<{ text: string; name: string }[]>(dummy);

  const convertText = (text: string, mapping: Mapping): string => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => mapping[char] || char)
      .join("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const userInput: string = event.target.value.toLowerCase();
    setInputText(userInput); // Update the inputText state with the current input value

    const futureAlienChar: string = convertText(userInput, futureAlienCharMap);

    const longTextBubblesChar: string = convertText(
      userInput,
      longTextBubblesMap
    );
    const frakturChar: string = convertText(userInput, frakturMap);
    const crypticItalicChar: string = convertText(userInput, crypticItalicMap);
    const mathSansChar: string = convertText(userInput, mathSansMap);
    const scriptBoldItalicChar: string = convertText(
      userInput,
      scriptBoldItalicMap
    );
    const fairytaleChar: string = convertText(userInput, fairytaleMap);
    const heartsChar: string = convertText(userInput, heartsMap);
    const emojisTextChar: string = convertText(userInput, emojisTextMap);
    const darkTextBubblesChar: string = convertText(
      userInput,
      darkTextBubblesMap
    );
    const frakturBoldChar: string = convertText(userInput, frakturBoldMap);
    const monospaceTextChar: string = convertText(userInput, monospaceTextMap);
    const subscriptChar: string = convertText(userInput, subscriptMap);
    const superscriptChar: string = convertText(userInput, superscriptMap);
    const fullWidthChar: string = convertText(userInput, fullWidthMap);
    const parenthesisChar: string = convertText(userInput, parenthesisMap);
    const wizardChar: string = convertText(userInput, wizardMap);
    const lefthandedChar: string = convertText(userInput, lefthandedMap);
    const darkTextSquaresChar: string = convertText(
      userInput,
      darkTextSquaresMap
    );
    const lightTextSquaresChar: string = convertText(
      userInput,
      lightTextSquaresMap
    );
    const doubleStruckChar: string = convertText(userInput, doubleStruckMap);
    const cyrillicChar: string = convertText(userInput, cyrillicMap);
    const mirroredFlippedChar: string = convertText(
      userInput,
      mirroredFlippedMap
    );
    const japaneseChar: string = convertText(userInput, japaneseMap);
    const arabicChar: string = convertText(userInput, arabicMap);
    const invertedChar: string = convertText(userInput, invertedMap);
    const mathSansBoldItalicChar: string = convertText(
      userInput,
      mathSansBoldItalicMap
    );
    const diagonalStrikesChar: string = convertText(
      userInput,
      diagonalStrikesMap
    );
    const ancientStyle1Char: string = convertText(userInput, ancientStyle1Map);
    const dotSeparatedChar: string = convertText(userInput, dotSeparatedMap);
    const mixedStyle1Char: string = convertText(userInput, mixedStyle1Map);
    const handwritingChar: string = convertText(userInput, handwritingMap);
    const acuteAccentsChar: string = convertText(userInput, acuteAccentsMap);
    const modernGreekChar: string = convertText(userInput, modernGreekMap);
    const underlinedByDashesChar: string = convertText(
      userInput,
      underlinedByDashesMap
    );
    const linedUpChar: string = convertText(userInput, linedUpMap);
    const mixedStyle2Char: string = convertText(userInput, mixedStyle2Map);
    const upAndDownChar: string = convertText(userInput, upAndDownMap);
    const europeanCharactersChar: string = convertText(
      userInput,
      europeanCharactersMap
    );
    const asianCharactersChar: string = convertText(
      userInput,
      asianCharactersMap
    );
    const monoUpperChar: string = convertText(userInput, monoUpperMap);
    const darkBracketsChar: string = convertText(userInput, darkBracketsMap);
    const devlishChar: string = convertText(userInput, devlishMap);
    const metalÜmlautsChar: string = convertText(userInput, metalÜmlautsMap);
    const curvyChar: string = convertText(userInput, curvyMap);
    const mathSansItalicChar: string = convertText(
      userInput,
      mathSansItalicMap
    );
    const boxedinChar: string = convertText(userInput, boxedinMap);
    const arrowsChar: string = convertText(userInput, arrowsMap);
    const mixedStyle3Char: string = convertText(userInput, mixedStyle3Map);
    const mathItalicChar: string = convertText(userInput, mathItalicMap);
    const bandaidChar: string = convertText(userInput, bandaidMap);
    const deltaChar: string = convertText(userInput, deltaMap);
    const mathStyleChar: string = convertText(userInput, mathStyleMap);
    const windyChar: string = convertText(userInput, windyMap);
    const strikethroughChar: string = convertText(userInput, strikethroughMap);
    const xCrossChar: string = convertText(userInput, xCrossMap);
    const yataganChar: string = convertText(userInput, yataganMap);
    const sovietChar: string = convertText(userInput, sovietMap);
    const xeperatedChar: string = convertText(userInput, xeperatedMap);
    const strokedChar: string = convertText(userInput, strokedMap);
    const mathBoldChar: string = convertText(userInput, mathBoldMap);
    const linesLinesLinesChar: string = convertText(
      userInput,
      linesLinesLinesMap
    );
    const anchorStyleChar: string = convertText(userInput, anchorStyleMap);
    const printStampChar: string = convertText(userInput, printStampMap);
    const hookBracketsChar: string = convertText(userInput, hookBracketsMap);
    const doubleStrokesChar: string = convertText(userInput, doubleStrokesMap);
    const shadowChar: string = convertText(userInput, shadowMap);
    const fireworksChar: string = convertText(userInput, fireworksMap);
    const pointingBackChar: string = convertText(userInput, pointingBackMap);
    const pointingForwardChar: string = convertText(
      userInput,
      pointingForwardMap
    );
    const airQuotesChar: string = convertText(userInput, airQuotesMap);
    const manuscriptChar: string = convertText(userInput, manuscriptMap);
    const wavyChar: string = convertText(userInput, wavyMap);
    const doubleUnderlinesChar: string = convertText(
      userInput,
      doubleUnderlinesMap
    );
    const doubleDoubleDotsChar: string = convertText(
      userInput,
      doubleDoubleDotsMap
    );
    const hourglassChar: string = convertText(userInput, hourglassMap);
    const crypticChar: string = convertText(userInput, crypticMap);
    const doubleLinesChar: string = convertText(userInput, doubleLinesMap);
    const censoredChar: string = convertText(userInput, censoredMap);
    const musicBarsChar: string = convertText(userInput, musicBarsMap);
    const allTheWayUpChar: string = convertText(userInput, allTheWayUpMap);
    const cometTailChar: string = convertText(userInput, cometTailMap);
    const wiseCharactersChar: string = convertText(
      userInput,
      wiseCharactersMap
    );
    const hotChar: string = convertText(userInput, hotMap);
    const mathSansBoldChar: string = convertText(userInput, mathSansBoldMap);
    const ancientStyle2Char: string = convertText(userInput, ancientStyle2Map);
    const ancientStyle3Char: string = convertText(userInput, ancientStyle3Map);
    const dottedPatternChar: string = convertText(userInput, dottedPatternMap);
    const foodEmojisChar: string = convertText(userInput, foodEmojisMap);
    const Code737Char: string = convertText(userInput, Code737Map);
    const triangleBracketsChar: string = convertText(
      userInput,
      triangleBracketsMap
    );
    const heavyArrowBracketsChar: string = convertText(
      userInput,
      heavyArrowBracketsMap
    );
    const jumpyTextChar: string = convertText(userInput, jumpyTextMap);
    const tentVillageChar: string = convertText(userInput, tentVillageMap);
    const funkyChar: string = convertText(userInput, funkyMap);
    const colonsChar: string = convertText(userInput, colonsMap);
    const threeVerticalDotsChar: string = convertText(
      userInput,
      threeVerticalDotsMap
    );
    const yodaChar: string = convertText(userInput, yodaMap);
    const fahrenheitChar: string = convertText(userInput, fahrenheitMap);
    const weirdText1Char: string = convertText(userInput, weirdText1Map);
    const fauxCyrillicChar: string = convertText(userInput, fauxCyrillicMap);
    const betweenLinesChar: string = convertText(userInput, betweenLinesMap);
    const lenticularLensChar: string = convertText(
      userInput,
      lenticularLensMap
    );
    const doubleParenthesesChar: string = convertText(
      userInput,
      doubleParenthesesMap
    );
    const bubblyChar: string = convertText(userInput, bubblyMap);
    const iceyChar: string = convertText(userInput, iceyMap);
    const volumeChar: string = convertText(userInput, volumeMap);
    const princessStyleChar: string = convertText(userInput, princessStyleMap);
    const underscoresChar: string = convertText(userInput, underscoresMap);
    const mysteriousChar: string = convertText(userInput, mysteriousMap);
    const fauxEthiopianChar: string = convertText(userInput, fauxEthiopianMap);
    const umbrellaStyleChar: string = convertText(userInput, umbrellaStyleMap);
    const countryCodesChar: string = convertText(userInput, countryCodesMap);
    const rightDirectionAboveChar: string = convertText(
      userInput,
      rightDirectionAboveMap
    );
    const rightDirectionUnderChar: string = convertText(
      userInput,
      rightDirectionUnderMap
    );
    const hieroglyphsChar: string = convertText(userInput, hieroglyphsMap);
    const swimmingInTheSeaChar: string = convertText(
      userInput,
      swimmingInTheSeaMap
    );
    const curvedTextChar: string = convertText(userInput, curvedTextMap);
    const orthodoxChar: string = convertText(userInput, orthodoxMap);
    const currenciesChar: string = convertText(userInput, currenciesMap);
    const stackedAboveChar: string = convertText(userInput, stackedAboveMap);
    const hebrewChar: string = convertText(userInput, hebrewMap);
    const dashedChar: string = convertText(userInput, dashedMap);
    const zMathChar: string = convertText(userInput, zMathMap);
    const drinksEmojisChar: string = convertText(userInput, drinksEmojisMap);
    const weirdText2Char: string = convertText(userInput, weirdText2Map);
    const weirdText3Char: string = convertText(userInput, weirdText3Map);
    const weirdText4Char: string = convertText(userInput, weirdText4Map);
    const wavedTextChar: string = convertText(userInput, wavedTextMap);
    const bubblyBubblesChar: string = convertText(userInput, bubblyBubblesMap);
    const sweetsEmojisChar: string = convertText(userInput, sweetsEmojisMap);
    const squareBracketsChar: string = convertText(
      userInput,
      squareBracketsMap
    );
    const crossItUnderChar: string = convertText(userInput, crossItUnderMap);
    const rainOnTopChar: string = convertText(userInput, rainOnTopMap);
    const bubblesOnTopChar: string = convertText(userInput, bubblesOnTopMap);
    const allLowercaseChar: string = convertText(userInput, allLowercaseMap);
    const allUppercaseChar: string = convertText(userInput, allUppercaseMap);
    const sentencecaseChar: string = convertText(userInput, sentencecaseMap);
    const titleCaseChar: string = convertText(userInput, titleCaseMap);
    const alternatingCaseChar: string = convertText(
      userInput,
      alternatingCaseMap
    );

    const resultText: string = `
    futureAlien: ${futureAlienChar}\n
    
    longTextBubbles: ${longTextBubblesChar}\n
    fraktur: ${frakturChar}\n
    crypticItalic: ${crypticItalicChar}\n
    mathSans: ${mathSansChar}\n
    scriptBoldItalic: ${scriptBoldItalicChar}\n
    fairytale: ${fairytaleChar}\n
    hearts: ${heartsChar}\n
    emojisText: ${emojisTextChar}\n
    darkTextBubbles: ${darkTextBubblesChar}\n
    frakturBold: ${frakturBoldChar}\n
    monospaceText: ${monospaceTextChar}\n
    subscript: ${subscriptChar}\n
    superscript: ${superscriptChar}\n
    fullWidth: ${fullWidthChar}\n
    parenthesis: ${parenthesisChar}\n
    wizard: ${wizardChar}\n
    lefthanded: ${lefthandedChar}\n
    darkTextSquares: ${darkTextSquaresChar}\n
    lightTextSquares: ${lightTextSquaresChar}\n
    doubleStruck: ${doubleStruckChar}\n
    cyrillic: ${cyrillicChar}\n
    mirroredFlipped: ${mirroredFlippedChar}\n
    japanese: ${japaneseChar}\n
    arabic: ${arabicChar}\n
    inverted: ${invertedChar}\n
    mathSansBoldItalic: ${mathSansBoldItalicChar}\n
    diagonalStrikes: ${diagonalStrikesChar}\n
    ancientStyle1: ${ancientStyle1Char}\n
    dotSeparated: ${dotSeparatedChar}\n
    mixedStyle1: ${mixedStyle1Char}\n
    handwriting: ${handwritingChar}\n
    acuteAccents: ${acuteAccentsChar}\n
    modernGreek: ${modernGreekChar}\n
    underlinedByDashes: ${underlinedByDashesChar}\n
    linedUp: ${linedUpChar}\n
    mixedStyle2: ${mixedStyle2Char}\n
    upAndDown: ${upAndDownChar}\n
    europeanCharacters: ${europeanCharactersChar}\n
    asianCharacters: ${asianCharactersChar}\n
    monoUpper: ${monoUpperChar}\n
    darkBrackets: ${darkBracketsChar}\n
    devlish: ${devlishChar}\n
    metalÜmlauts: ${metalÜmlautsChar}\n
    curvy: ${curvyChar}\n
    mathSansItalic: ${mathSansItalicChar}\n
    boxedin: ${boxedinChar}\n
    arrows: ${arrowsChar}\n
    mixedStyle3: ${mixedStyle3Char}\n
    mathItalic: ${mathItalicChar}\n
    bandaid: ${bandaidChar}\n
    delta: ${deltaChar}\n
    mathStyle: ${mathStyleChar}\n
    windy: ${windyChar}\n
    strikethrough: ${strikethroughChar}\n
    xCross: ${xCrossChar}\n
    yatagan: ${yataganChar}\n
    soviet: ${sovietChar}\n
    xeperated: ${xeperatedChar}\n
    stroked: ${strokedChar}\n
    mathBold: ${mathBoldChar}\n
    linesLinesLines: ${linesLinesLinesChar}\n
    anchorStyle: ${anchorStyleChar}\n
    printStamp: ${printStampChar}\n
    hookBrackets: ${hookBracketsChar}\n
    doubleStrokes: ${doubleStrokesChar}\n
    shadow: ${shadowChar}\n
    fireworks: ${fireworksChar}\n
    pointingBack: ${pointingBackChar}\n
    pointingForward: ${pointingForwardChar}\n
    airQuotes: ${airQuotesChar}\n
    manuscript: ${manuscriptChar}\n
    wavy: ${wavyChar}\n
    doubleUnderlines: ${doubleUnderlinesChar}\n
    doubleDoubleDots: ${doubleDoubleDotsChar}\n
    hourglass: ${hourglassChar}\n
    cryptic: ${crypticChar}\n
    doubleLines: ${doubleLinesChar}\n
    censored: ${censoredChar}\n
    musicBars: ${musicBarsChar}\n
    allTheWayUp: ${allTheWayUpChar}\n
    cometTail: ${cometTailChar}\n
    wiseCharacters: ${wiseCharactersChar}\n
    hot: ${hotChar}\n
    mathSansBold: ${mathSansBoldChar}\n
    ancientStyle2: ${ancientStyle2Char}\n
    ancientStyle3: ${ancientStyle3Char}\n
    dottedPattern: ${dottedPatternChar}\n
    foodEmojis: ${foodEmojisChar}\n
    Code737: ${Code737Char}\n
    triangleBrackets: ${triangleBracketsChar}\n
    heavyArrowBrackets: ${heavyArrowBracketsChar}\n
    jumpyText: ${jumpyTextChar}\n
    tentVillage: ${tentVillageChar}\n
    funky: ${funkyChar}\n
    colons: ${colonsChar}\n
    threeVerticalDots: ${threeVerticalDotsChar}\n
    yoda: ${yodaChar}\n
    fahrenheit: ${fahrenheitChar}\n
    weirdText1: ${weirdText1Char}\n
    fauxCyrillic: ${fauxCyrillicChar}\n
    betweenLines: ${betweenLinesChar}\n
    lenticularLens: ${lenticularLensChar}\n
    doubleParentheses: ${doubleParenthesesChar}\n
    bubbly: ${bubblyChar}\n
    icey: ${iceyChar}\n
    volume: ${volumeChar}\n
    princessStyle: ${princessStyleChar}\n
    underscores: ${underscoresChar}\n
    mysterious: ${mysteriousChar}\n
    fauxEthiopian: ${fauxEthiopianChar}\n
    umbrellaStyle: ${umbrellaStyleChar}\n
    countryCodes: ${countryCodesChar}\n
    rightDirectionAbove: ${rightDirectionAboveChar}\n
    rightDirectionUnder: ${rightDirectionUnderChar}\n
    hieroglyphs: ${hieroglyphsChar}\n
    swimmingInTheSea: ${swimmingInTheSeaChar}\n
    curvedText: ${curvedTextChar}\n
    orthodox: ${orthodoxChar}\n
    currencies: ${currenciesChar}\n
    stackedAbove: ${stackedAboveChar}\n
    hebrew: ${hebrewChar}\n
    dashed: ${dashedChar}\n
    zMath: ${zMathChar}\n
    drinksEmojis: ${drinksEmojisChar}\n
    weirdText2: ${weirdText2Char}\n
    weirdText3: ${weirdText3Char}\n
    weirdText4: ${weirdText4Char}\n
    wavedText: ${wavedTextChar}\n
    bubblyBubbles: ${bubblyBubblesChar}\n
    sweetsEmojis: ${sweetsEmojisChar}\n
    squareBrackets: ${squareBracketsChar}\n
    crossItUnder: ${crossItUnderChar}\n
    rainOnTop: ${rainOnTopChar}\n
    bubblesOnTop: ${bubblesOnTopChar}\n
    allLowercase: ${allLowercaseChar}\n
    allUppercase: ${allUppercaseChar}\n
    sentencecase: ${sentencecaseChar}\n
    titleCase: ${titleCaseChar}\n
    alternatingCase: ${alternatingCaseChar}\n
    `;

    setOutputText(resultText);
    setConvertedText([
      { text: futureAlienChar, name: "future Alien" },

      { text: longTextBubblesChar, name: "long Text Bubbles" },
      { text: frakturChar, name: "Fraktur" },
      { text: crypticItalicChar, name: "cryptic Italic" },
      { text: mathSansChar, name: "mathSans" },
      { text: scriptBoldItalicChar, name: "script Bold Italic" },
      { text: fairytaleChar, name: "fairytale" },
      { text: heartsChar, name: "hearts" },
      { text: emojisTextChar, name: "emojis Text" },
      { text: darkTextBubblesChar, name: "dark Text Bubbles" },
      { text: frakturBoldChar, name: "fraktur Bold" },
      { text: monospaceTextChar, name: "monospace Text" },
      { text: subscriptChar, name: "sub script" },
      { text: superscriptChar, name: "super script" },
      { text: fullWidthChar, name: "full Width" },
      { text: parenthesisChar, name: "parenthesis" },
      { text: wizardChar, name: "wizard" },
      { text: lefthandedChar, name: "lefthanded" },
      { text: darkTextSquaresChar, name: "dark Text Squares" },
      { text: lightTextSquaresChar, name: "light Text Squares" },
      { text: doubleStruckChar, name: "double Struck" },
      { text: cyrillicChar, name: "cyrillic" },
      { text: mirroredFlippedChar, name: "mirrored Flipped" },
      { text: japaneseChar, name: "japanese" },
      { text: arabicChar, name: "arabic" },
      { text: invertedChar, name: "inverted" },
      { text: mathSansBoldItalicChar, name: "math Sans Bold Italic" },
      { text: diagonalStrikesChar, name: "diagonal Strikes" },
      { text: ancientStyle1Char, name: "ancient Style1" },
      { text: dotSeparatedChar, name: "dot Separated" },
      { text: mixedStyle1Char, name: "mixed Style1" },
      { text: handwritingChar, name: "handwriting" },
      { text: acuteAccentsChar, name: "acute Accents" },
      { text: modernGreekChar, name: "modern Greek" },
      { text: underlinedByDashesChar, name: "underlined By Dashes" },
      { text: linedUpChar, name: "linedUp" },
      { text: mixedStyle2Char, name: "mixed Style2" },
      { text: upAndDownChar, name: "up And Down" },
      { text: europeanCharactersChar, name: "european Characters" },
      { text: asianCharactersChar, name: "asian Characters" },
      { text: monoUpperChar, name: "mono Upper" },
      { text: darkBracketsChar, name: "dark Brackets" },
      { text: devlishChar, name: "devlish" },
      { text: metalÜmlautsChar, name: "metalÜmlauts" },
      { text: curvyChar, name: "curvy" },
      { text: mathSansItalicChar, name: "math Sans Italic" },
      { text: boxedinChar, name: "boxedin" },
      { text: arrowsChar, name: "arrows" },
      { text: mixedStyle3Char, name: "mixed Style3" },
      { text: mathItalicChar, name: "math Italic" },
      { text: bandaidChar, name: "bandaid" },
      { text: deltaChar, name: "delta" },
      { text: mathStyleChar, name: "math Style" },
      { text: windyChar, name: "windy" },
      { text: strikethroughChar, name: "strike through" },
      { text: xCrossChar, name: "xCross" },
      { text: yataganChar, name: "yatagan" },
      { text: sovietChar, name: "soviet" },
      { text: xeperatedChar, name: "xeperated" },
      { text: strokedChar, name: "stroked" },
      { text: mathBoldChar, name: "mathBold" },
      { text: linesLinesLinesChar, name: "lines Lines Lines" },
      { text: anchorStyleChar, name: "anchor Style" },
      { text: printStampChar, name: "print Stamp" },
      { text: hookBracketsChar, name: "hook Brackets" },
      { text: doubleStrokesChar, name: "double Strokes" },
      { text: shadowChar, name: "shadow" },
      { text: fireworksChar, name: "fireworks" },
      { text: pointingBackChar, name: "pointing Back" },
      { text: pointingForwardChar, name: "pointing Forward" },
      { text: airQuotesChar, name: "air Quotes" },
      { text: manuscriptChar, name: "manu Script" },
      { text: wavyChar, name: "wavy" },
      { text: doubleUnderlinesChar, name: "double Underlines" },
      { text: doubleDoubleDotsChar, name: "double DoubleDots" },
      { text: hourglassChar, name: "hourglass" },
      { text: crypticChar, name: "cryptic" },
      { text: doubleLinesChar, name: "double Lines" },
      { text: censoredChar, name: "censored" },
      { text: musicBarsChar, name: "musicBars" },
      { text: allTheWayUpChar, name: "all The Way Up" },
      { text: cometTailChar, name: "comet Tail" },
      { text: wiseCharactersChar, name: "wise Characters" },
      { text: hotChar, name: "hot" },
      { text: mathSansBoldChar, name: "math SansBold" },
      { text: ancientStyle2Char, name: "ancient Style2" },
      { text: ancientStyle3Char, name: "ancient Style3" },
      { text: dottedPatternChar, name: "dotted Pattern" },
      { text: foodEmojisChar, name: "food Emojis" },
      { text: Code737Char, name: "Code737" },
      { text: triangleBracketsChar, name: "triangle Brackets" },
      { text: heavyArrowBracketsChar, name: "heavy Arrow Brackets" },
      { text: jumpyTextChar, name: "jumpy Text" },
      { text: tentVillageChar, name: "tent Village" },
      { text: funkyChar, name: "funky" },
      { text: colonsChar, name: "colons" },
      { text: threeVerticalDotsChar, name: "three Vertical Dots" },
      { text: yodaChar, name: "yoda" },
      { text: fahrenheitChar, name: "fahrenheit" },
      { text: weirdText1Char, name: "weird Text1" },
      { text: fauxCyrillicChar, name: "faux Cyrillic" },
      { text: betweenLinesChar, name: "between Lines" },
      { text: lenticularLensChar, name: "lenticularLens" },
      { text: doubleParenthesesChar, name: "double Parentheses" },
      { text: bubblyChar, name: "bubbly" },
      { text: iceyChar, name: "icey" },
      { text: volumeChar, name: "volume" },
      { text: princessStyleChar, name: "princess Style" },
      { text: underscoresChar, name: "underscores" },
      { text: mysteriousChar, name: "mysterious" },
      { text: fauxEthiopianChar, name: "faux Ethiopian" },
      { text: umbrellaStyleChar, name: "umbrella Style" },
      { text: countryCodesChar, name: "country Codes" },
      { text: rightDirectionAboveChar, name: "right Direction Above" },
      { text: rightDirectionUnderChar, name: "right Direction Under" },
      { text: hieroglyphsChar, name: "hieroglyphs" },
      { text: swimmingInTheSeaChar, name: "swimmingIn The Sea" },
      { text: curvedTextChar, name: "curved Text" },
      { text: orthodoxChar, name: "orthodox" },
      { text: currenciesChar, name: "currencies" },
      { text: stackedAboveChar, name: "stacked Above" },
      { text: hebrewChar, name: "hebrew" },
      { text: dashedChar, name: "dashed" },
      { text: zMathChar, name: "zMath" },
      { text: drinksEmojisChar, name: "drinks Emojis" },
      { text: weirdText2Char, name: "weird Text 2" },
      { text: weirdText3Char, name: "weird Text 3" },
      { text: weirdText4Char, name: "weird Text 4" },
      { text: wavedTextChar, name: "waved Text" },
      { text: bubblyBubblesChar, name: "bubbly Bubbles" },
      { text: sweetsEmojisChar, name: "sweets Emojis" },
      { text: squareBracketsChar, name: "square Brackets" },
      { text: crossItUnderChar, name: "cross It Under" },
      { text: rainOnTopChar, name: "rain On Top" },
      { text: bubblesOnTopChar, name: "bubbles On Top" },
      { text: allLowercaseChar, name: "all Lowercase" },
      { text: allUppercaseChar, name: "all Uppercase" },
      { text: sentencecaseChar, name: "sentence case" },
      { text: titleCaseChar, name: "title Case" },
      { text: alternatingCaseChar, name: "alternating Case" },
    ]);
  };

  return (
    <section className="mx-auto md:max-w-lg lg:max-w-4xl">
      <div className="bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] !w-full h-[5.4rem] absolute left-0  -z-[99] gra" />

      <textarea
        placeholder="Enter Text"
        value={inputText}
        onChange={handleInputChange}
        className="border w-full mt-4 py-2 px-4 rounded-xl focus:outline-none shadow"
        rows={4}
      />

      <div className="bg-white mt-3 py-1 rounded-2xl border cursor-pointer w-full ">
        {convertedText.map((name, index) => (
          <TextContainer
            text={name.text}
            name={name.name}
            index={index}
            key={index}
          />
        ))}
      </div>

      <article className="bg-white p-4 mt-4 rounded-3xl shadow">
        <p>
          Introducing our sophisticated{" "}
          <strong>Font Styler for Instagram</strong>—an invaluable tool designed
          to elevate your bio from mundane to mesmerizing.
        </p>
        <p>
          With over 300 exquisite fonts at your disposal, this user-friendly
          tool ensures that your Instagram profile stands out effortlessly.
        </p>

        <p>
          Gone are the days of dull and unremarkable text. Now, you can
          effortlessly transform your bio into a visual masterpiece with a wide
          array of elegant fonts.
        </p>
        <p>
          This versatile tool caters to all devices, ensuring that whether
          you're using a smartphone, tablet, or computer, the enchanting fonts
          will seamlessly enhance your Instagram experience.
        </p>

        <p>
          Navigate through the expansive collection of fonts, each curated to
          add a touch of flair and uniqueness to your bio. Select the perfect
          style that resonates with your personality or the vibe of your
          content.
        </p>
        <p>
          The <em>Font Styler</em> empowers you to express yourself in ways that
          captivate your audience, making your profile truly distinctive.
        </p>

        <p>
          Best of all, our <strong>Font Styler</strong> is completely free to
          use. No hidden costs or subscriptions—just a straightforward and
          accessible way to bring your Instagram bio to life.
        </p>
        <p>
          Elevate your online presence effortlessly and make a lasting
          impression with our <strong>Font Styler for Instagram</strong>. Try it
          today and watch your bio transform into a work of art!
        </p>
        <h2>Key Elements of Instagram Fonts</h2>
        <h3>Over 300 Unique Fonts:</h3>
        <p>
          Choose from a vast collection of more than 300 fancy fonts to give
          your bio a personalized and eye-catching touch. Mix and match to find
          the perfect style that suits your personality.
        </p>

        <h3>Device Compatibility:</h3>
        <p>
          FancyFont Generator works seamlessly on all devices – whether you're
          using a smartphone, tablet, or computer. No more worrying about font
          compatibility issues – we've got you covered!
        </p>

        <h3>User-Friendly Interface:</h3>
        <p>
          The tool is incredibly easy to use. Simply type or paste your bio text
          into the generator, hit the magic button, and witness the
          transformation.
        </p>
        <p>
          No tech-savvy skills required – it's as easy as sending a text
          message!
        </p>

        <h3>Instant Results:</h3>
        <p>
          Watch your bio come to life in a matter of seconds. FancyFont
          Generator delivers instant results, allowing you to preview and choose
          the font that suits your style best without any delays.
        </p>

        <h3>Free of Charge:</h3>
        <p>
          Say goodbye to pricey font services! FancyFont Generator is absolutely
          free to use.
        </p>
        <p>
          Enhance your Instagram profile without spending a penny – because
          everyone deserves a chance to shine.
        </p>

        <h3>No Sign-up Required:</h3>
        <p>
          Enjoy the freedom of creativity without the hassle of signing up or
          creating an account.
        </p>
        <p>
          FancyFont Generator believes in keeping things simple, making it
          hassle-free for you to revamp your bio effortlessly.
        </p>

        <h3>Shareable and Social Media Ready:</h3>
        <p>
          Once you've found the perfect font for your bio, easily copy and paste
          it directly into your Instagram profile.
        </p>
        <p>
          Share your stylish bio with friends and followers, and let your
          profile be the talk of the town.
        </p>

        <p>
          Upgrade your Instagram experience today with FancyFont Generator –
          where simplicity meets style! Transform your bio effortlessly and make
          a lasting impression on your followers.
        </p>
      </article>
    </section>
  );
};

export default SymbolConverter;
