export class Fraction {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toString() {
    const fractions = [
      { value: 1 / 8, text: '1/8' },
      { value: 1 / 4, text: '1/4' },
      { value: 1 / 3, text: '1/3' },
      { value: 3 / 8, text: '3/8' },
      { value: 1 / 2, text: '1/2' },
      { value: 5 / 8, text: '5/8' },
      { value: 2 / 3, text: '2/3' },
      { value: 3 / 4, text: '3/4' },
      { value: 7 / 8, text: '7/8' },
    ];

    const whole = Math.floor(this.decimal);
    const remainder = this.decimal - whole;

    let closest = '';
    let minDiff = Infinity;

    for (const fraction of fractions) {
      const diff = Math.abs(remainder - fraction.value);

      if (diff < minDiff) {
        minDiff = diff;
        closest = fraction.text;
      }
    }

    if (minDiff > 0.05) return `${this.decimal}`;

    if (whole === 0) return closest;

    return `${whole} ${closest}`;
  }
}
