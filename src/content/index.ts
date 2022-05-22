import $ from "jquery";

export const bionic = (() => {
  const remove = () => $("body").find("b").contents().unwrap();

  const apply = () =>
    $("body")
      .find("*")
      .contents()
      .filter(function () {
        return this.nodeType === Node.TEXT_NODE;
      })
      .replaceWith(function () {
        return $(this)
          .text()
          .replace(/(?<=\b)([^aeiouy]*[aeiouy]*)/gi, "<b>$1</b>");
      });

  return { remove, apply };
})();

bionic.apply();
