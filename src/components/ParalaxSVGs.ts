import bg from "../assets/paralaxSVGs/bg.svg";
import ground from "../assets/paralaxSVGs/ground.svg";
import layer2 from "../assets/paralaxSVGs/layer2.svg";
import layer3left from "../assets/paralaxSVGs/layer3left.svg";
import layer3right from "../assets/paralaxSVGs/layer3right.svg";
import layer4left from "../assets/paralaxSVGs/layer4left.svg";
import layer4right from "../assets/paralaxSVGs/layer4right.svg";
import layer5left from "../assets/paralaxSVGs/layer5left.svg";
import layer5right from "../assets/paralaxSVGs/layer5right.svg";
import layer6left from "../assets/paralaxSVGs/layer6left.svg";
import layer6right from "../assets/paralaxSVGs/layer6right.svg";
import layer7left from "../assets/paralaxSVGs/layer7left.svg";
import layer7right from "../assets/paralaxSVGs/layer7right.svg";
import layer8left from "../assets/paralaxSVGs/layer8left.svg";
import layer8right from "../assets/paralaxSVGs/layer8right.svg";
import layer9left from "../assets/paralaxSVGs/layer9left.svg";
import layer9right from "../assets/paralaxSVGs/layer9right.svg";
import layer10left from "../assets/paralaxSVGs/layer10left.svg";
import layer10right from "../assets/paralaxSVGs/layer10right.svg";
import layer11left from "../assets/paralaxSVGs/layer11left.svg";
import layer11right from "../assets/paralaxSVGs/layer11right.svg";
import layer12left from "../assets/paralaxSVGs/layer12left.svg";
import layer12right from "../assets/paralaxSVGs/layer12right.svg";
import layer13left from "../assets/paralaxSVGs/layer13left.svg";
import layer13right from "../assets/paralaxSVGs/layer13right.svg";
import layer14left from "../assets/paralaxSVGs/layer14.svg"
import rocketcloud1 from "../assets/paralaxSVGs/rocketcloud1.svg";
import rocketcloud2 from "../assets/paralaxSVGs/rocketcloud2.svg";
import rocketcloud3 from "../assets/paralaxSVGs/rocketcloud3.svg";
import rocket from "../assets/paralaxSVGs/rocket.svg";
import stars from "../assets/paralaxSVGs/stars.svg";

let leftRightSVGs = [
  [{svg: layer3left, layer: 3}, {svg: layer3right, layer: 3}],
  [{svg: layer4left, layer: 4}, {svg: layer4right, layer: 4}],
  [{svg: layer5left, layer: 5}, {svg: layer5right, layer: 5}],
  [{svg: layer6left, layer: 6}, {svg: layer6right, layer: 6}],
  [{svg: layer7left, layer: 7}, {svg: layer7right, layer: 7}],
  [{svg: layer8left, layer: 8}, {svg: layer8right, layer: 8}],
  [{svg: layer9left, layer: 9}, {svg: layer9right, layer: 9}],
  [{svg: layer10left, layer: 10}, {svg: layer10right, layer:10}],
  [{svg: layer11left, layer: 11}, {svg: layer11right, layer:11}],
  [{svg: layer12left, layer: 12}, {svg: layer12right, layer:12}],
  [{svg: layer13left, layer: 13}, {svg: layer13right, layer:13}],
  [{svg: layer14left, layer: 14}]
];

export default {
  backcloud: {svg:layer2, layer: 2},
  bg: {svg:bg, layer: 0},
  stars: {svg:stars, layer: 1},
  rocket: {svg:rocket, layer: 15},
  ground: {svg:ground, layer: 16},
  rocketcloud1: {svg: rocketcloud1, layer: 19},
  rocketcloud2: {svg:rocketcloud2, layer: 18},
  rocketcloud3: {svg:rocketcloud3, layer: 17},
  leftRightSVGs: leftRightSVGs,
};
    