import { makeAutoObservable } from "mobx";

export type EnzianScore = {
  "p": number,
  "ol": number,
  "or": number,
  "tl": number,
  "tr": number,
  "a": number,
  "bl": number,
  "br": number,
  "c": number
}

export type EnzianProps = {[key in keyof EnzianScore]: EnzianScore[key]}

class EnzianStore {
  enzianScore: EnzianScore = {
    a: 0,
    bl: 0,
    br: 0,
    c: 0,
    ol: 0,
    or: 0,
    p: 0,
    tl: 0,
    tr: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  changeScore(newScore: { [p: string]: any }) {
    this.enzianScore = { ...this.enzianScore, ...newScore };
  }

  get coding(): string {
    const { a, bl, br, c, ol, or, p, tl, tr } = this.enzianScore;
    return `P ${p}, O ${ol}/${or}, T ${tl}/${tr}, A ${a}, B ${bl}/${br}, C ${c}`;
  }
}

const enzianStore = new EnzianStore();

export default enzianStore;
