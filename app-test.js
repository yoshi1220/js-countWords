describe("count words function", function() {
  it("test case1", function() {
    const input = "red green blue blue green blue";
    const result = [
      {"word":"red", "count":1},
      {"word":"green", "count":2},
      {"word":"blue", "count":3}
    ];
    expect(countWords(input)).toEqual(result);
  });

  it("test case2", function() {
    const input = "Nagato Yukikaze Akagi Kitakami Nagato Akagi Akagi Kitakami";
    const result = [
      {"word":"Nagato", "count":2},
      {"word":"Yukikaze", "count":1},
      {"word":"Akagi", "count":3},
      {"word":"Kitakami", "count":2}
    ];
    expect(countWords(input)).toEqual(result);
  });
});
