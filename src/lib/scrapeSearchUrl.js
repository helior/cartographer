import _ from 'lodash';
import scrapeIt from 'scrape-it';

/**
 * Get all addresses by scraping search result page.
 */
const scrapeSearchUrl = (url) => {
  console.log(url, 'scrapeSearchUrl');
  return scrapeForPager(url)
    .then(scrapePages)
    .then(results => {
      _.forEach(results, result => {
        console.log(result.addresses, 'addresses');
      });
      return results;
    });
}

/**
 * Get list of URLs for all search result pages.
 */
const scrapeForPager = (url) => {
  return scrapeIt(url, pagerSpec)
    .then(page => {
      const pages = [];
      const hrefs = _.uniqBy(page.pager, 'href');
      _.forEach(hrefs, e => {
        let relativeParent = url.substring(0, url.lastIndexOf('/'));
        pages.push(relativeParent + '/' + e.href);
      });

      return pages;
    });
}

/**
 * Scrape list of pages.
 */
const scrapePages = (pages) => {
  const promises = [];

  _.forEach(pages, page => {
    promises.push(scrapePage(page));
  });

  return Promise.all(promises);
}

/**
 * Scrape an individual page.
 */
const scrapePage = (url) => {
  return scrapeIt(url, addressListSpec);
}

const parseAddressBlob = (index) => {
  return (data) => {
    let trimData = data.text().trim();
    try {
      let parts = trimData.split('\n');
      return parts[index].trim();
    }
    catch (e) {
        // console.log(e);
    }
  }
}

const pagerSpec = {
  pager: {
    listItem: '.pagination:first-child a',
    data: {
      href: {
        attr: 'href'
      }
    }
  }
}

const addressListSpec = {
  addressList: {
    listItem: '.main-row',
    data: {
      status: {
        selector: '.th-img img',
        attr: 'src',
        convert: x => x === 'assets/images/dot.png' ? 'open': 'closed'
      },
      thumbnail: {
        selector: '.th-img img',
        attr: 'style',
        convert: x => x.replace('background-image:url(','').replace(');','')
      },
      phone: '.phonenumberrow',
      name: {
        selector: 'div',
        how: parseAddressBlob(0)
      },
      address1: {
        selector: 'div',
        how: parseAddressBlob(2)
      },
      address2: {
        selector: 'div',
        how: parseAddressBlob(3)
      },
      reviews: {
        selector: 'div',
        how: parseAddressBlob(5)
      },
      relativelink: {
        selector: '.th-img',
        attr: 'href'
      }
    }
  }
}

export default scrapeSearchUrl;
