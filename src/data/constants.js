import birdsData from './birds-data'

const state = {
  count: 0,
  score: 0,
  answer: null,
  userAction: null
}
const listQuestions = ["Разминка", "Ворбьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы",];
const defaultName = '*****'
const allBirdsInStage = birdsData[state.count]
const bird = allBirdsInStage[Math.floor(Math.random() * Math.floor(allBirdsInStage.length))]
state.answer = bird.id

export {
  state,
  listQuestions,
  defaultName,
  bird
}