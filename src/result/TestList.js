import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { Skeleton } from "antd";

export default function TestList(props) {
  const history = useHistory();
  const [tests, setTests] = useState([]);
  useEffect(() => {
    setTests(props.tests.reverse());
  }, [props]);

  

  let selectRef,
    selectedData = {};

  const handleButtonClick = () => {
    if(selectRef == undefined) {
      return;
    }
    props.handleSelectedTest(selectedData);
    history.push(
      `/result/${selectedData.testName?.replace(/\s+/g, "-").toLowerCase()}`
    );
  };

  const handleSelectTest = (e, index) => {
    if (selectRef) {
      selectRef.classList.remove("selected__test");
    }
    selectRef = e.currentTarget;
    e.currentTarget.classList.add("selected__test");
    selectedData = tests[index];
  };



  return (
    <>
      <div className="select__test__wrapper">
        <div className="select__test__search__box">
          <div className="test__wrapper__body">
            <p className="test__wrapper__heading select__heading">
              Select Test
            </p>
            <div className="select__test__body">
              {tests && tests.length > 0 ? (
                tests.map((test, index) => (
                  <div
                    key={index}
                    className={`test__wrapper`}
                    onClick={(e) => {
                      handleSelectTest(e, index);
                    }}
                  >
                    <p className="select__test" key={index}>
                      {test.testName}
                    </p>
                  </div>
                ))
              ) : (
                <div className="select__skeleton">
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="select__button">
          <Button type="primary" onClick={handleButtonClick}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}
