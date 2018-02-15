---
id: documentación-api
title: Documentación API
---
Métodos Cloudsave

``` c#

public static void SetString(string key, string value, Action<bool> success); public static void SetInt(string key, int value, Action<bool> success); public static void SetFloat(string key, float value, Action<bool> success); public static void SetBool(string key, bool value, Action<bool> success);

public static void GetInt (string key, Action<int> result); public static void GetString (string key, Action<string> result); public static void GetBool (string key, Action<bool> result); public static void GetFloat (string key, Action<float> result);

    <br />Examples
    
    ``` c#
    
    CloudSave.SetInt("score", 100, success => {
        if (success) {
            // saved
        } else {
            // not saved
        }
    });
    
    CloudSave.GetInt("score", score => {
        ScoreText.text = score.ToString();
    });