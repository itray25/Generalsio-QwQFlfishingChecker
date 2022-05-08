const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
var limdu = require('limdu');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.listen(1145,()=>console.log('start on port 1145'));
var x1;
var x2;
var x3;
var x4;

app.get('/class',(req,res)=>{
    var TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
        binaryClassifierType: limdu.classifiers.SvmJs.bind(0, {C: 0.2})
    });
    
    // Initialize a classifier with a feature extractor and a lookup table:
    var intentClassifier = new limdu.classifiers.EnhancedClassifier({
        classifierType: TextClassifier,
        featureExtractor: limdu.features.NGramsOfWords(1),  // each word ("1-gram") is a feature  
        featureLookupTable: new limdu.features.FeatureLookupTable()
    });
    
    // Train and test:
    intentClassifier.trainBatch([
        {input: "11+b1", output: "茶馨慧"},
        {input: "11+g2", output: ["新茶会","茶馨慧"]},
        {input: "12+b3", output: "literature"},
        {input: "12+g4", output: ["新会差","science"]},
        {input: "11+g5", output: ["literature","新会差"]},
        {input: "11+g6", output: "literature"},
        {input: "11+g7", output: ["新茶会","science"]},
        {input: "11+g8", output: ["茶馨慧","science"]},
        {input: "11+g9", output: ["literature","新茶会"]},
        {input: "12", output: "g"},
        {input: "11+g10", output: ["新茶会"]},
        {input: "11+g11", output: ["literature"]},
        {input: "11+g12", output: "ytyryty"},
        {input: "11+g13", output: ["literature","新茶会"]},
        {input: "11+g14", output: ["literature","新茶会"]},
        {input: "11+g15", output: "xoinchahui"},
        {input: "11+g16", output: "lrewr"},

        {input: "11+g17", output: "literature"},
        {input: "11+g18", output: "tetw"},
        ]);
    
    console.dir(intentClassifier.classify("12+g10"));  // ['apl','bnn']
    x1 = req.query.age;
    x2 = req.query.gender;
    x3 = req.query.likes;
    res.json(intentClassifier.classify("11+g10"))
})