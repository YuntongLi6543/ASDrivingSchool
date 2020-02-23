import React, { Component } from 'react';

import { englishTest, chineseTest } from '../assets/data/TestData';

import {
    Button
} from "reactstrap";

import '../scss/Courses.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OnlineTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roadSignsTest: [],
            roadSignsTestIndex: 0,
            roadRulesTest: [],
            roadRulesTestIndex: 0,
            display: 'none',
            message: '',
        };
    }

    handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    componentDidMount = () => {
        this.setState({ roadSignsTest: this.createRandomNumbers(10, 0, 75) });
        this.setState({ roadRulesTest: this.createRandomNumbers(20, 0, 126) });
    }

    createRandomNumbers(totalNumber, startNumber, endNumber) {
        let randomNumberArray = [];
        let json = {};
        while (randomNumberArray.length < totalNumber) {
            let randomNumber = Math.round(Math.random() * (endNumber - startNumber)) + startNumber;
            if (!json[randomNumber]) {
                json[randomNumber] = 1;
                randomNumberArray.push(randomNumber);
            }
        }
        return randomNumberArray;
    }

    checkAnswer = (selectedAnswer, correctAnswer) => {
        if (selectedAnswer === correctAnswer) {
            this.setState({
                englishMessage: 'Corrent!',
                chineseMessage: '正确'
            })
        } else {
            this.setState({
                englishMessage: 'Wrong!',
                chineseMessage: '错误!'
            })
        }
        this.setState({ display: true })
    }

    nextSignsQuestion = () => {
        this.setState({
            roadSignsTestIndex: this.state.roadSignsTestIndex + 1,
            display: 'none',
            message: ''
        })
    }

    nextRulesQuestion = () => {
        this.setState({
            roadRulesTestIndex: this.state.roadRulesTestIndex + 1,
            display: 'none',
            message: ''
        })
    }

    restartTest = () => {
        this.setState({
            roadSignsTestIndex: 0,
            roadRulesTestIndex: 0,
        })
    }

    render() {
        const { t } = this.props;

        let lang = this.props.i18n.language;

        let roadSignsRandomTest = this.state.roadSignsTest;
        let roadRulesRandomTest = this.state.roadRulesTest;

        let onlineTest;

        if (lang === 'en') {
            if (roadSignsRandomTest[this.state.roadSignsTestIndex] !== undefined) {
                if (this.state.roadSignsTestIndex <= roadSignsRandomTest.length - 1) {
                    onlineTest =
                        <div>
                            <img src={require(`../assets/img/test/englishTestImg/${englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].question}`)} className="second-card-img" alt="..." />
                            {/* annie (4个选项，一个文字正确答案，一个下一题按钮，样式，居中 主题绿色) */}
                            <button onClick={() => this.checkAnswer('A', englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>A</button>
                            <button onClick={() => this.checkAnswer('B', englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>B</button>
                            <button onClick={() => this.checkAnswer('C', englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>C</button>
                            <button onClick={() => this.checkAnswer('D', englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>D</button>
                            <div style={{ display: this.state.display }}>{this.state.englishMessage} Corrent Answer: {englishTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer}</div>
                            <button style={{ display: this.state.nextSignsQuestionButtonDisplay }} onClick={() => this.nextSignsQuestion()}>Next Question</button>
                        </div>
                }
            }

            if (roadSignsRandomTest[this.state.roadSignsTestIndex] === undefined
                && roadRulesRandomTest[this.state.roadRulesTestIndex] !== undefined) {
                onlineTest =
                    <div>
                        <img src={require(`../assets/img/test/englishTestImg/${englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].question}`)} className="second-card-img" alt="..." />
                        {/* annie (4个选项，一个文字正确答案，一个下一题按钮，样式，居中 主题绿色) */}
                        <button onClick={() => this.checkAnswer('A', englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>A</button>
                        <button onClick={() => this.checkAnswer('B', englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>B</button>
                        <button onClick={() => this.checkAnswer('C', englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>C</button>
                        <button onClick={() => this.checkAnswer('D', englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>D</button>
                        <div style={{ display: this.state.display }}>{this.state.englishMessage} Corrent Answer: {englishTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer}</div>
                        <button style={{ display: this.state.nextRulesQuestionButtonDisplay }} onClick={() => this.nextRulesQuestion()}>Next Question</button>
                    </div>
            }

            if (roadSignsRandomTest[this.state.roadSignsTestIndex] === undefined
                && roadRulesRandomTest[this.state.roadRulesTestIndex] === undefined) {
                onlineTest =
                    //annie (button 样式，居中 主题绿色)
                    <Button
                        className="mt-4 our-server-btn"
                        color="primary"
                        onClick={this.restartTest}
                    >
                        Restart Test
                    </Button>
            }
        } else {
            if (roadSignsRandomTest[this.state.roadSignsTestIndex] !== undefined) {
                if (this.state.roadSignsTestIndex <= roadSignsRandomTest.length - 1) {
                    onlineTest =
                        <div>
                            <img src={require(`../assets/img/test/chineseTestImg/${chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].question}`)} className="second-card-img" alt="..." />
                            {/* annie (4个选项，一个文字正确答案，一个下一题按钮，样式，居中 主题绿色) */}
                            <button onClick={() => this.checkAnswer('A', chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>A</button>
                            <button onClick={() => this.checkAnswer('B', chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>B</button>
                            <button onClick={() => this.checkAnswer('C', chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>C</button>
                            <button onClick={() => this.checkAnswer('D', chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer)}>D</button>
                            <div style={{ display: this.state.display }}>{this.state.chineseMessage} 正确答案: {chineseTest[roadSignsRandomTest[this.state.roadSignsTestIndex]].answer}</div>
                            <button style={{ display: this.state.nextSignsQuestionButtonDisplay }} onClick={() => this.nextSignsQuestion()}>下一题</button>
                        </div>
                }
            }

            if (roadSignsRandomTest[this.state.roadSignsTestIndex] === undefined
                && roadRulesRandomTest[this.state.roadRulesTestIndex] !== undefined) {
                onlineTest =
                    <div>
                        <img src={require(`../assets/img/test/chineseTestImg/${chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].question}`)} className="second-card-img" alt="..." />
                        {/* annie (4个选项，一个文字正确答案，一个下一题按钮，样式，居中 主题绿色) */}
                        <button onClick={() => this.checkAnswer('A', chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>A</button>
                        <button onClick={() => this.checkAnswer('B', chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>B</button>
                        <button onClick={() => this.checkAnswer('C', chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>C</button>
                        <button onClick={() => this.checkAnswer('D', chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer)}>D</button>
                        <div style={{ display: this.state.display }}>{this.state.chineseMessage} 正确答案: {chineseTest[roadRulesRandomTest[this.state.roadRulesTestIndex] + 75].answer}</div>
                        <button style={{ display: this.state.nextRulesQuestionButtonDisplay }} onClick={() => this.nextRulesQuestion()}>下一题</button>
                    </div>
            }

            if (roadSignsRandomTest[this.state.roadSignsTestIndex] === undefined
                && roadRulesRandomTest[this.state.roadRulesTestIndex] === undefined) {
                onlineTest =
                    //annie (button 样式，居中 主题绿色，同中文样式)
                    <Button
                        className="mt-4 our-server-btn"
                        color="primary"
                        onClick={this.restartTest}
                    >
                        重新开始
                    </Button>
            }
        }

        return (
            <div>
                <h2 className="page-title">{t('onlineResource.onlineTest')}</h2>
                {onlineTest}
            </div>
        )
    }
}

export default withTranslation()(OnlineTest);