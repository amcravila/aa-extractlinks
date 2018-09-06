const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const getLinksFromMd = require('../index');

describe('index', () => {
  describe('getLinksFromMd()', () => {
    context('when there is no parameter', () => {
      it('should throw an error', () => {
        assert.throw(function() {
          getLinksFromMd();
        }, 'Parâmetro Inválido. Digite um texto.');
      });
    });

    context('when textMd is a number', () => {
      it('should return an error', () => {
        assert.throw(function() {
          getLinksFromMd(1234);
        }, 'Digite um texto apenas com letras!');
      });
    });

    context('when textMd is a string and there is no URL', () => {
      it('should return an empty array', () => {
        assert(function() {
          getLinksFromMd('Um texto qualquer, sem URL');
        }, []);
      });
    });

    context('when textMd is a string and there is one URL', () => {
      it('should return the url in an array with object with the URL and markdown link', () => {
        assert(function() {
          getLinksFromMd('Oi você quer entrar no site [google](www.google.com)');
        }, [
          { href: 'www.google.com',
            text: 'google'
          }]);
      });
    });

    context('when textMd is a string and there is three diferents URL', function() {
      it('should return the urls in an array with object', function() {
        assert(function() {
          getLinksFromMd('Oi você quer entrar no site [google](www.google.com) e no site [laboratoria](www.laboratoria.la) ou também pode querer ir em [qualquer_site](www.qqq.com.br)');
        }, [
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
