import {
  getVerifiedComments,
  timesShared,
  addFullName
} from "../Experiment";
import { thread } from "../api";


function double(number) {
  return number * 2
}

describe('double', () => {
  it('returns the double value of a number', () => {
    expect(double(8)).toBe(16)
  })  

  /* TO-DO: Write some tests for your code */

})

describe('sumTimesShared', () => {
  it('should return correct number timeShared comments', () => {
    const comments = thread.comments

    const ts = timesShared(comments);

    expect(ts).toBe(98)
  })
})

describe("getVerifiedComments", () => {
  it("should return correct number of verified comments", () => {
    const comments = thread.comments;

    const verifiedComments = getVerifiedComments(comments);

    expect(verifiedComments).toHaveLength(2);
  });
});

describe("addFullNameToComments", () => {
  it("should add fullname to comments", () => {
    const comments = thread.comments

    const fullNameComments = addFullName(comments)

    for (let comment of fullNameComments) {
      expect(comment.author.fullName).toBe(`${comment.author.first} ${comment.author.second}`)
    }
  });
});