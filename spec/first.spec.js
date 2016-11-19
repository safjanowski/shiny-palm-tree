describe("First test", function() {
  it("Return true", function() {
    expect(true).toBe(true)
  })

  it("Captures thrown error", function() {
    expect(function() {
      throw new Error
    }).toThrowError()
  })
})
