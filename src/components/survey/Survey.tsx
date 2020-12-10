import React from "react";
import settings from "./settings.json";
import * as SR from "survey-react";
import {CustomWidget} from "../customWidget/CustomWidget"
// import { CustomWidgetCollection } from 'survey-react';
//https://surveyjs.io/create-survey
//ga naar de bovenstaande link om de survey te maken, kopieer daar "pages" en plak het over de "pages in settings.json"
const model = new SR.Model(settings);

//handig om vragen te disecteren
// SR.StylesManager.applyTheme("default");
// console.log("questions");
// model.getAllQuestions().forEach(function (question) {
//   console.log(question);
// });
// console.log("----");

const Survey = (props: any) => {
  SR.CustomWidgetCollection.Instance.addCustomWidget(CustomWidget, "customtype");
  return (
    <div>
      <SR.Survey
        model={model}
        onComplete={props.onComplete}
        onValueChanged={props.onValueChanged}
      />
    </div>
  );
};

export default Survey;
