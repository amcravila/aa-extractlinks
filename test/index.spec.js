const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const getLinksFromMd = require('../index');

describe('index', () => {
  describe('getLinksFromMd()', () => {
    context('when there is no parameter', () => {
      it('should throw an error', () => {
        expect(() => getLinksFromMd()).to.throw('Parâmetro Inválido. Digite um texto.');
      });
    });

    context('when textMd is a number', () => {
      it('should return an error', () => {
        expect(() => getLinksFromMd(1234)).to.throw('Digite um texto apenas com letras!');
      });
    });

    context('when textMd is a string and there is no URL', () => {
      it('should return an empty array', () => {
        expect(getLinksFromMd('Um texto sem URL')
        ).to.be.an('array');
        expect(getLinksFromMd('Um texto sem URL')
        ).to.be.empty;
      });
    });

    context('when textMd is a string and there is one URL', () => {
      it('should return the url in an array with object with the URL and markdown link', () => {
        expect(getLinksFromMd('Oi você quer entrar no site [google](www.google.com)')).to.deep.equal([
          { href: 'www.google.com',
            text: 'google'
          }]);
      });
    });

    context('when textMd is a string and there is three diferents URL', function() {
      it('should return the urls in an array with object', function() {
        expect(getLinksFromMd('Oi você quer entrar no site [google](www.google.com) e no site [laboratoria](www.laboratoria.la) ou também pode querer ir em [qualquer_site](www.qqq.com.br)')).to.deep.equal([
          { href: 'www.google.com',
            text: 'google'
          },
          { href: 'www.laboratoria.la',
            text: 'laboratoria'
          },
          { href: 'www.qqq.com.br',
            text: 'qualquer_site'
          }]);
      });
    });
  });
});
