function tusk3() {
    let hex = '#';
    const letters = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    console.log(hex);
  }
  