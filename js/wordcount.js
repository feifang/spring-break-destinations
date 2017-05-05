// Wordcount algorithm inspired by http://stackoverflow.com/a/37907839

var stopwords = nlpWords.concat(springbreakWords, symbolWords);

var count = function (content, numOfWords) {
    var result = [],
        hash = {};

    // remove undesirable characters from content text
    content = content.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");  // url
    content = content.replace(/[#.:|&;$%@"<>()+,\-\u2026]/g, "");  // symbols using Character Classes

    // tokenization
    var words = content.split(" ");
    words.forEach(function (word) {
      // filter stopwords
      lower = word.toLowerCase();
      if (word !== "" && stopwords.indexOf(lower) < 0) {
        if (!hash[word]) {
          hash[word] = { text: word, size: 0 };
          result.push(hash[word]);
        }
        hash[word].size++;
      }
    });

    return result.sort(function (a, b) { return b.size - a.size;}).slice(0,numOfWords);  // in desc order
};
