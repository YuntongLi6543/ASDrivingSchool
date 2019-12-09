import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import "../scss/css/Courses.css"

export default class Courses extends Component {

    render() {
        return (
            <div className = "Courses">
                <Container>
                <h2 id = "mainTitle">精品课程</h2>
                <div className = "courseDetails">
                    <div id = "firstCourse">
                        <Container>
                            <h4 id = "courseTitle1" >快速取证班</h4>
                            <p id =" intro1">这个班次是为已经有相当的驾驶经验和基础的人群设计的。
                                往往只需要二至三次的路面重点训练，
                                然后由资深教练帮着订考期，并指导G2 或G 路考, 顺利过关。
                            </p>
                            <ul className = "list-group list-group-flush">
                                <li className = "list-group-item">针对性的重点训练</li>
                                <li className = "list-group-item">排快期</li>
                                <li className = "list-group-item">接送服务</li>
                                <li className = "list-group-item">租用教练车考试</li>
                            </ul>
                        </Container>
                    </div>
                    <div id = "secondCourse">
                        <Container>
                            <h4 id = "courseTitle2" >驾车技能/知识快速提升课程</h4>
                            <p id =" intro2">这种个性化的课程是为以下这些客户设计的，他们自己有车并有一定的驾驶经验和技能，
                                也不一定是为考试目的，但某些方面的技能和知识比较薄弱，
                                往往只想重点练某几个科目或者补充某方面欠缺的知识，以便短时间内快速达到目标</p>
                        </Container>
                    </div>
                    <div id = "thirdCourse">
                        <Container>
                            <h4 id = "courseTitle3" >包考包过</h4>
                            <p id =" intro3">这个课程是为有考试恐惧症的人设计的。这些人群中很多人驾驶技能并不低，
                                但只因害怕考试而不敢去考试或屡屡失败。
                                我们提供的包考项目可以减轻考试压力，减少经济负担，使学生轻松应对路考</p>
                        </Container>
                    </div>
                </div>
                </Container>
            
            </div>
        );
    }
}