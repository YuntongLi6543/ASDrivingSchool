import React, { Component } from 'react';

import { englishTest, chineseTest } from '../assets/data/TestData';

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
            this.setState({ message: 'Corrent!' })
        } else {
            this.setState({ message: 'Wrong!' })
        }
        this.setState({ display: true })
    }

    nextQuestion = () => {
        this.setState({
            roadSignsTestIndex: this.state.roadSignsTestIndex + 1,
            display: 'none',
            message: ''
        })
    }

    render() {
        const { t } = this.props;

        let lang = this.props.i18n.language;

        let roadSignsRandomTest = this.state.roadSignsTest;
        let roadSignsTest;
        let roadRulesTest;

        console.log(this.state.roadSignTestIndex, roadSignsRandomTest.length)

        if (lang === 'en') {
            if (roadSignsRandomTest[this.state.roadSignTestIndex] !== undefined) {
                if (this.state.roadSignTestIndex < roadSignsRandomTest.length - 1) {
                    roadSignsTest =
                        <div>
                            <img src={require(`../assets/img/test/englishTestImg/${englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].question}`)} className="second-card-img" alt="..." />
                            <button onClick={() => this.checkAnswer('A', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>A</button>
                            <button onClick={() => this.checkAnswer('B', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>B</button>
                            <button onClick={() => this.checkAnswer('C', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>C</button>
                            <button onClick={() => this.checkAnswer('D', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>D</button>
                            <div style={{ display: this.state.display }}>{this.state.message} Corrent Answer: {englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer}</div>
                            <button style={{ display: this.state.nextQuestionButtonDisplay }} onClick={() => this.nextQuestion()}>Next Question</button>
                        </div>
                }
            }

            if (roadSignsRandomTest[this.state.roadSignTestIndex] !== undefined) {
                if (this.state.roadSignTestIndex > roadSignsRandomTest.length - 1) {
                    roadSignsTest =
                        <div>
                            <img src={require(`../assets/img/test/englishTestImg/${englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].question}`)} className="second-card-img" alt="..." />
                            <button onClick={() => this.checkAnswer('A', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>A</button>
                            <button onClick={() => this.checkAnswer('B', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>B</button>
                            <button onClick={() => this.checkAnswer('C', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>C</button>
                            <button onClick={() => this.checkAnswer('D', englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer)}>D</button>
                            <div style={{ display: this.state.display }}>{this.state.message} Corrent Answer: {englishTest[roadSignsRandomTest[this.state.roadSignTestIndex]].answer}</div>
                            <button style={{ display: this.state.nextQuestionButtonDisplay }} onClick={() => this.nextQuestion()}>Next Question</button>
                        </div>
                }
            }




            // let roadSignTest = this.state.roadSignTest.map((item, index) =>
            //     <div>
            //         <div>
            //             <img src={require(`../assets/img/test/englishTestImg/${englishTest[index].question}`)} className="second-card-img" alt="..." />
            //             <button onClick={() => this.checkAnswer('A', englishTest[index].answer)}>A</button>
            //             <button onClick={() => this.checkAnswer('B', englishTest[index].answer)}>B</button>
            //             <button onClick={() => this.checkAnswer('C', englishTest[index].answer)}>C</button>
            //             <button onClick={() => this.checkAnswer('D', englishTest[index].answer)}>D</button>
            //             <div style={{display: this.state.display}}>正确答案：{englishTest[index].answer}</div>
            //             <button>下一题</button>
            //         </div>
            //     </div>
            // );
            return (
                <div>
                    <h2 className="page-title">{t('onlineResource.onlineTest')}</h2>
                    {roadSignsTest}
                </div>
            )
        } else {
            return (
                <div>
                    <h2 className="page-title">{t('onlineResource.onlineTest')}</h2>
                    <div>
                        <img src={require(`../assets/img/test/chineseTestImg/${chineseTest[0].question}`)} className="second-card-img" alt="..." />
                        <text>{chineseTest[0].answer}</text>
                    </div>
                </div>
            )
        }
    }
}

export default withTranslation()(OnlineTest);