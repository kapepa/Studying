import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Features: FC = () => {
  const clickPresent = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('clickPresent')
  }

  const clickCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('clickPresent')
  }

  const clickFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('clickFeatures')
  }

  return <section className={style.features}>
    <div className={style.features__header}>
      <h3 className={'cap__header'}><span className={'cap__header--highlight'}>Our</span> Features</h3>
      <span className={'cap__detailed'}>This very extraordinary feature, can make learning activities more efficient</span>
    </div>
    <div className={style.features__interface}>
      <div className={`${style.features__conversation} ${style['f-conversation']}`}>
        <div className={`${style['f-conversation__base']}`}>
          <img className={style['f-conversation__border']} src={'/image/border.png'} alt='border'/>
          <div className={style['f-conversation__communication']}>
            <div className={style['f-conversation__leading']}>
              <img className={style['f-conversation__speaker']} src={'/image/community_people_one.png'} alt={'people'}/>
              <div className={style['f-conversation__action-area']}>
                <BtnDefault bg={'blue'} text={'Present'} size={'small'} click={clickPresent}/>
                <BtnDefault bg={'red'} text={'Call'} size={'small'} click={clickCall}/>
              </div>
            </div>
            <div className={style['f-conversation__grid-friends']}>
              <img className={style['f-conversation__person']} src={'/image/community_people_two.png'} alt='people' />
              <img className={style['f-conversation__person']} src={'/image/community_people_three.png'} alt='people'/>
              <img className={style['f-conversation__person']} src={'/image/community_people_four.png'} alt='people' />
              <img className={style['f-conversation__person']} src={'/image/community_people_five.png'} alt='people' />
            </div>
          </div>
        </div>
      </div>
      <div className={style.features__classroom}>
        <h3 className={`cap__header cap__header--left ${style['features__cap']}`}> A<span className={'cap__header--highlight'}> user interface designed </span> for the classroom</h3>
        <div className={style['f-list']}>

          <div className={style['f-list__cell']}>
            <div className={style['f-list__figure']}>
              <div className={style['f-list__frame']}>
                <img src={'/svg/four_square.svg'} alt={'ico'} width={26} height={26}/>
              </div>
            </div>
            <span className={style['f-list__span']}>Teachers don’t get lost in the grid view and have a dedicated Podium space.</span>
          </div>

          <div className={style['f-list__cell']}>
            <div className={style['f-list__figure']}>
              <div className={style['f-list__frame']}>
                <img src={'/svg/double_square.svg'} alt={'ico'} width={26} height={26}/>
              </div>
            </div>
            <span className={style['f-list__span']}>TA’s and presenters can be moved to the front of the class.</span>
          </div>

          <div className={style['f-list__cell']}>
            <div className={style['f-list__figure']}>
              <div className={style['f-list__frame']}>
                <img src={'/svg/community_simply.svg'} alt={'ico'} width={26} height={26}/>
              </div>
            </div>
            <span className={style['f-list__span']}>Teachers can easily see all students and class data at one time.</span>
          </div>

        </div>
      </div>
    </div>
    <div className={`${style['f-template']}`}>
      <div className={style['f-template__detailed']}>
        <h3 className={'cap__header cap__header--left'}><span className={'cap__header--highlight'}>Tools</span> For Teachers And Learners</h3>
        <span className={'cap__detailed cap__detailed--left'}>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</span>
      </div>
      <div>
        <picture>
          <source srcSet={'/image/teacher479х431.png'} media='(max-width:768px)'/>
          <img className={style['f-template__img']} src={'/image/teacher.png'} alt={'teacher'} />
        </picture>
      </div>
    </div>
    <div className={`${style['f-template']}`}>
      <div>
        <picture>
          <source srcSet={'/image/question380x411.png'} media='(max-width:768px)'/>
          <img className={style['f-template__img']} src={'/image/question.png'} alt={'teacher'} />
        </picture>
      </div>
      <div className={style['f-template__detailed']}>
        <h3 className={'cap__header cap__header--left'}> Assessments, <span className={'cap__header--highlight'}>Quizzes</span>, Tests</h3>
        <span className={'cap__detailed cap__detailed--left'}>Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</span>
      </div>
    </div>
    <div className={`${style['f-template']}`}>
      <div className={style['f-template__detailed']}>
        <h3 className={'cap__header cap__header--left'}><span className={'cap__header--highlight'}>Class Management</span> Tools for Educators</h3>
        <span className={'cap__detailed cap__detailed--left'}>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</span>
      </div>
      <div>
        <picture>
          <source srcSet={'/image/grade-book520x368.png'} media='(max-width:768px)'/>
          <img className={style['f-template__img']} src={'/image/grade-book.png'} alt={'teacher'} />
        </picture>
      </div>
    </div>
    <div className={`${style['f-template']}`}>
      <div>
        <picture>
          <source srcSet={'/image/discussion480x356.png'} media='(max-width:768px)'/>
          <img className={style['f-template__img']} src={'/image/discussion.png'} alt={'teacher'} />
        </picture>
      </div>
      <div className={style['f-template__detailed']}>
        <h3 className={'cap__header cap__header--left'}><span className={'cap__header--highlight'}>One-on-One</span> Discussions</h3>
        <span className={'cap__detailed cap__detailed--left'}>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</span>
      </div>
    </div>
    <div className={style['features__features-btn']}>
      <BtnDefault text={'See more features'} size={'large'} click={clickFeatures} bg={'green'}/>
    </div>
  </section>
}

export default Features;