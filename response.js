export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - Hello%World',
        totalResults: '9500000',
        searchTerms: 'Hello%World',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '0555ce552a5c4418f',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - Hello%World',
        totalResults: '9500000',
        searchTerms: 'Hello%World',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '0555ce552a5c4418f',
      },
    ],
  },
  context: {
    title: 'Google.com',
  },
  searchInformation: {
    searchTime: 0.537773,
    formattedSearchTime: '0.54',
    totalResults: '9500000',
    formattedTotalResults: '9,500,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'https://www.google.com/uds/samples/apidocs/hellowo...',
      htmlTitle: 'https://www.google.com/uds/samples/apidocs/hellowo...',
      link: 'https://www.google.com/uds/samples/apidocs/helloworld.html',
      displayLink: 'www.google.com',
      formattedUrl:
        'https://www.google.com/uds/samples/apidocs/helloworld.html',
      htmlFormattedUrl:
        'https://www.google.com/uds/samples/apidocs/<b>helloworld</b>.html',
    },
    {
      kind: 'customsearch#result',
      title: "Hello World It's Me",
      htmlTitle: '<b>Hello World</b> It&#39;s Me',
      link: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        "The world has evolved into a struggle between what's good and what's right. Join me every Sunday as I breakdown controversial issues about culture,??...",
      htmlSnippet:
        'The <b>world</b> has evolved into a struggle between what&#39;s good and what&#39;s right. Join me every Sunday as I breakdown controversial issues about culture,&nbsp;...',
      cacheId: 'UloBJWbhVwcJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': "Hello World It's Me",
            'og:site_name': 'Google Podcasts',
            'og:title': "Hello World It's Me",
            'music:creator': "Hello World It's Me",
            title: "Hello World It's Me",
            'og:description':
              "The world has evolved into a struggle between what's good and what's right.\nJoin me every Sunday as I breakdown controversial issues about culture, politics and race.\nSo if you are a person who cares about the world around them and wants informed opinions this podcast is for you.",
            'twitter:creator': "Hello World It's Me",
            'article:author': "Hello World It's Me",
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Shopping',
      htmlTitle: '<b>Hello World</b> Shopping',
      link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
      displayLink: 'www.google.com',
      snippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google??...',
      htmlSnippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
      cacheId: 'q0-peCHq4tIJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            name: 'Hello World Shopping',
            description: 'Hello World Shopping',
            url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Shopping',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World Shopping',
            'og:title': 'Hello World Shopping',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:description': 'Hello World Shopping',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! Processing',
      htmlTitle: '<b>Hello World</b>! Processing',
      link: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyecci??n en Arteleku - Octubre 2012.',
      htmlSnippet:
        '<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyecci??n en Arteleku - Octubre 2012.',
      cacheId: 'LkrfSTqN6ZAJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            name: 'Hello World! Processing',
            description: 'Hello World! Processing',
            url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! Processing',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World! Processing',
            'og:title': 'Hello World! Processing',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:description': 'Hello World! Processing',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'About ??? Google Maps',
      htmlTitle: 'About ??? Google Maps',
      link: 'https://www.google.com/maps/about/',
      displayLink: 'www.google.com',
      snippet:
        'Discover the world with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      htmlSnippet:
        'Discover the <b>world</b> with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      cacheId: 'ZeiiuE8l81kJ',
      formattedUrl: 'https://www.google.com/maps/about/',
      htmlFormattedUrl: 'https://www.google.com/maps/about/',
      pagemap: {
        metatags: [
          {
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
      htmlTitle:
        '<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance',
      link: 'https://www.google.com/finance/quote/HLO:ASX',
      displayLink: 'www.google.com',
      snippet:
        'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed??...',
      htmlSnippet:
        'Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...',
      formattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      htmlFormattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8',
            width: '311',
            height: '162',
          },
        ],
        metatags: [
          {
            'application-name': 'Google Finance',
            'og:image':
              'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
            'theme-color': '#ffffff',
            'og:type': 'website',
            'og:image:width': '770',
            'twitter:card': 'summary',
            'twitter:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'apple-mobile-web-app-title': 'Google Finance',
            'og:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'og:image:height': '402',
            'og:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'twitter:image':
              'https://ssl.gstatic.com/finance/favicon/finance_496x496.png',
            referrer: 'origin',
            'apple-mobile-web-app-status-bar-style': 'default',
            'msapplication-tap-highlight': 'no',
            'twitter:site': '@google',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'mobile-web-app-capable': 'yes',
            'og:url': 'https://www.google.com/finance/quote/HLO:ASX',
          },
        ],
        cse_image: [
          {
            src: 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google',
      htmlTitle: 'Google',
      link: 'http://www.google.com/',
      displayLink: 'www.google.com',
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking??...",
      htmlSnippet:
        'Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...',
      cacheId: 'zhool8dxBV4J',
      formattedUrl: 'www.google.com/',
      htmlFormattedUrl: 'www.google.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc',
            width: '320',
            height: '112',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            viewport: 'width=device-width,minimum-scale=1.0',
            google: 'notranslate',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Slides ??? create and edit presentations online, for free.',
      htmlTitle:
        'Google Slides ??? create and edit presentations online, for free.',
      link: 'https://www.google.com/intl/en-GB/slides/about/',
      displayLink: 'www.google.com',
      snippet:
        'Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint??...',
      htmlSnippet:
        'Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint&nbsp;...',
      cacheId: 'ZGn_PEZ9DdcJ',
      formattedUrl: 'https://www.google.com/intl/en-GB/slides/about/',
      htmlFormattedUrl: 'https://www.google.com/intl/en-GB/slides/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEO12K-QgsjQPh5BI1urBxR1-H2sXs_nk3omUXz-8pR1RfkRG79tws2w',
            width: '120',
            height: '120',
          },
        ],
        metatags: [
          {
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/intl/en-GB/slides/about/images/common/add-pam.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "Alan Turing's 100th Birthday",
      htmlTitle: 'Alan Turing&#39;s 100th Birthday',
      link: 'https://www.google.com/doodles/alan-turings-100th-birthday',
      displayLink: 'www.google.com',
      snippet:
        'Jun 23, 2012 ... The code for this doodle has been open sourced. Alan Turing was a completely original thinker who shaped the modern world, but many people??...',
      htmlSnippet:
        'Jun 23, 2012 <b>...</b> The code for this doodle has been open sourced. Alan Turing was a completely original thinker who shaped the modern <b>world</b>, but many people&nbsp;...',
      formattedUrl:
        'https://www.google.com/doodles/alan-turings-100th-birthday',
      htmlFormattedUrl:
        'https://www.google.com/doodles/alan-turings-100th-birthday',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCYztJQqxWJNedwpvpAYABR8kOs6rDfdh0E_Sli1cozxfeTG5Vb56If3c',
            width: '521',
            height: '96',
          },
        ],
        metatags: [
          {
            'og:image':
              'http://www.google.com/logos/2012/turing-doodle-static.jpg',
            'twitter:card': 'summary_large_image',
            'twitter:title': "Alan Turing's 100th Birthday",
            'og:image:width': '522',
            'og:type': 'website',
            'twitter:site': '@GoogleDoodles',
            viewport: 'width=device-width',
            'twitter:description': "Alan Turing's 100th Birthday #GoogleDoodle",
            'og:title': "Alan Turing's 100th Birthday",
            'og:image:height': '97',
            'og:description': "Alan Turing's 100th Birthday #GoogleDoodle",
            'twitter:image':
              'http://www.google.com/logos/2012/turing-doodle-static.jpg',
          },
        ],
        cse_image: [
          {
            src: 'http://www.google.com/logos/2012/turing-doodle-static.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Sheets ??? create and edit spreadsheets online, for free.',
      htmlTitle:
        'Google Sheets ??? create and edit spreadsheets online, for free.',
      link: 'https://www.google.com/intl/en-GB/sheets/about/',
      displayLink: 'www.google.com',
      snippet:
        'Create a new spreadsheet and edit with others at the same time ??? from your computer, phone or tablet. Get things done with or without an Internet connection??...',
      htmlSnippet:
        'Create a new spreadsheet and edit with others at the same time ??? from your computer, phone or tablet. Get things done with or without an Internet connection&nbsp;...',
      cacheId: 'oifzQE3FJnUJ',
      formattedUrl: 'https://www.google.com/intl/en-GB/sheets/about/',
      htmlFormattedUrl: 'https://www.google.com/intl/en-GB/sheets/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJenGORXKrNHP0osV1WXGMWorcNXMS9FYuMPDBhyhYYxOOMuPwFv9Zg',
            width: '120',
            height: '120',
          },
        ],
        metatags: [
          {
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/intl/en-GB/sheets/about/images/common/add-kim.jpg',
          },
        ],
      },
    },
  ],
};
