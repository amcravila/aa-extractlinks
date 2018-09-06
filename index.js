const getLinksFromMd = (textMd) => {
  if (typeof textMd === 'undefined') {
    throw new Error('Parâmetro Inválido. Digite um texto.');
  }

  if (typeof textMd === 'number') {
    throw new Error('Digite um texto apenas com letras!');
  }

  let regexUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
  let regexUrlName = new RegExp(/(?<=\[)([(\w)]*)/g);
  let url = textMd.match(regexUrl);
  let urlName = textMd.match(regexUrlName);

  if (typeof textMd === 'string' && !url) {
    return [];
  }

  if (typeof textMd === 'string' && url) {
    return makeObject(url, nameUrl);
  }

  function makeObject(url, urlName) {
    const obj = [];
    url.map((url, index) => {
      obj.push({
        href: url,
        text: urlName[index]
      });
    });
    return obj;
  }
};

module.exports = getLinksFromMd;
