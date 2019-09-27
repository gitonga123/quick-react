<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>{{ currentQuestion.question }}</template>

      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item
          v-for="answer in answers"
          :key="answer.id"
          @click="selectedAnswer(answer.id)"
          :class="[answerClass(answer.id)]"
        >{{ answer.title }}</b-list-group-item>
      </b-list-group>
      <hr class="my-4" />
      <b-button variant="primary" @click="submitAnswer" :disabled="selectedIndex === null || answered">Submit</b-button>
      <b-button @click="next" variant="success" href="#">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      shuffledAnswers: [],
      correctIndex: 0,
      answered: false,
      
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.answers];
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    selectedAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.answers];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.currentQuestion.answer.answer_id
    },
    submitAnswer() {
      let isCorrect = false;
      this.correctIndex = this.currentQuestion.answer.answer_id;
      if (this.selectedIndex == this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true
      this.increment(isCorrect);
    },
    answerClass(index) {
      let answerClass =  '';
      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered && this.selectedIndex == index && this.correctIndex !== index) {
        answerClass = "incorrect"
      }
      return answerClass;
    }
  },
  mounted() {
    this.shuffleAnswers();
  }
};
</script>
<style  scoped>
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.selected {
  border: 3px solid blue;
  background-color: lightblue;
}
.correct {
  border: 3px solid green;
  background-color: lightgreen;
}
.incorrect {
  border: 3px solid red;
}
</style>