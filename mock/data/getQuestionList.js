// 生成问卷列表

const Mock = require('mockjs')

const Random = Mock.Random

function getQuestionList(len = 10, isDeleted = false) {
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted, // 假删除
    })
  }
  return list
}

module.exports = getQuestionList
