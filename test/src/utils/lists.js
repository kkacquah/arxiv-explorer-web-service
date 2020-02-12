export function getCounter() {
  var count = 0;

  function countUp() {
    count++;
    return count;
  }
  return countUp;
};
//pseudorandom generator for generating the same random
//base value every ttime
function xmur3(str) {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  }
}
export function difference(arr1, arr2) {
  if (arr1) {
    return arr1.filter(x => !arr2.includes(x));
  } else {
    return [];
  }
}

export function removeItem(arr, item) {
  return arr.filter(e => e !== item)
}

export const ListParam = {
  encode(labels) {
    return labels.join('+');
  },

  decode(labelsStr) {
    return labelsStr.split('+');
  }
}

export function getColor(labelName) {
  const psng = xmur3(labelName);
  var lum = -0.25;
  var hex = String('#' + psng().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}
