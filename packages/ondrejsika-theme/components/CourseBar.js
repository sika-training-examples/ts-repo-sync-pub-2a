import React from "react";
import styled from "styled-components";
import docker from "@app/data/pictures/courses/white/docker.svg";
import git from "@app/data/pictures/courses/white/git.svg";
import gitlabci from "@app/data/pictures/courses/white/gitlab_ci.svg";
import k8s from "@app/data/pictures/courses/white/kubernetes.svg";
import react from "@app/data/pictures/courses/white/react.svg";
import terraform from "@app/data/pictures/courses/white/terraform.svg";
import ansible from "@app/data/pictures/courses/white/ansible.svg";
import rancher from "@app/data/pictures/courses/white/rancher.svg";
import prometheus from "@app/data/pictures/courses/prometheus-white.png";
import proxmox from "@app/data/pictures/courses/white/proxmox.svg";

import Link from "next/link";

const Box = styled.div`
  &:hover {
    background-color: #c7bfb0;
  }
`;

const Card = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];
  return (
    <Box className="box" id={props.courseId}>
      <Link href={`/${training}/${props.courseId}`}>
        <a className="course-header">
          <h4 className="text-center text-white course-header pt-3">
            <span className="course-header">{props.courseName}</span>
          </h4>
          <img src={props.courseImg} className="img img-fluid p-3" />
        </a>
      </Link>
    </Box>
  );
};

const CourseBar = props => {
  return (
    <div className="">
      <h2 className="pt-4 pb-2" id="my-training">
        {props.LectureImgHeader}
      </h2>
      <div className="container-flex banner-courses">
        <div className="d-flex flex-wrap flex-sm-wrap flex-lg-nowrap d-lg-flex flex-row">
          <Card
            lang={props.lang}
            courseName="Docker"
            courseId="docker"
            courseImg={docker}
          />
          <Card
            lang={props.lang}
            courseName="Kubernetes"
            courseId="kubernetes"
            courseImg={k8s}
          />
          <Card
            lang={props.lang}
            courseName="Git"
            courseId="git"
            courseImg={git}
          />
          <Card
            lang={props.lang}
            courseName="Gitlab CI"
            courseId="gitlab-ci"
            courseImg={gitlabci}
          />
          <Card
            lang={props.lang}
            courseName="Ansible"
            courseId="ansible"
            courseImg={ansible}
          />
          <Card
            lang={props.lang}
            courseName="Prometheus"
            courseId="prometheus"
            courseImg={prometheus}
          />
          {(() => {
            if (!props.lang || props.lang == "cs") {
              return (
                <>
                  <Card
                    lang={props.lang}
                    courseName="Terraform"
                    courseId="terraform"
                    courseImg={terraform}
                  />
                  <Card
                    lang={props.lang}
                    courseName="Rancher"
                    courseId="rancher"
                    courseImg={rancher}
                  />
                  <Card
                    lang={props.lang}
                    courseName="React"
                    courseId="react"
                    courseImg={react}
                  />
                  <Card
                    lang={props.lang}
                    courseName="Proxmox"
                    courseId="proxmox"
                    courseImg={proxmox}
                  />
                </>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default CourseBar;
