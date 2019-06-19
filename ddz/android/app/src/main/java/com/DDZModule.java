package com;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.util.Log;
import android.widget.Toast;

import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.djddz.Card;
import com.djddz.Desk;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class DDZModule extends ReactContextBaseJavaModule {

    private static  Desk desk;

    public DDZModule(ReactApplicationContext reactContext) {
        super(reactContext);


    }

    @Override
    public String getName() {
        return "DDZ";
    }



    @ReactMethod
    public void toast() {
        Toast.makeText(getReactApplicationContext(), "SSSSS", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void init(Callback callback) {
        desk =new Desk();
        desk.init();
        desk.currentPerson=desk.boss;
        int poke[][] =desk.getPoke();
        WritableArray writableArray_ = new WritableNativeArray();
        putPoke(poke[0],writableArray_);
        if(desk.boss!=0){
            if(desk.boss==1){
                int i[] = new int [0];
                putPoke(i,writableArray_);
            }else {
                desk.gaming();
                putPoke(desk.currentCard.pokes,writableArray_);
            }
            desk.gaming();
            putPoke(desk.currentCard.pokes,writableArray_);
        }else{
            int i[] = new int [0];
            putPoke(i,writableArray_);
            putPoke(i,writableArray_);
        }

        callback.invoke(writableArray_);
    }
    @ReactMethod
    public void cupai(ReadableArray readableArray,Callback callback) {
        int size=readableArray.size();
        int [] pork_ = new int[size];
        desk.currentPerson=0;
        Card card =null;
        if(size==0)
            desk.buyao();
        else if(size>0){
            for(int i=0;i<size;i++){
              pork_[i] = new Integer(readableArray.getString(i));
            }
            card=desk.cupai(pork_);
        }
        int poke[][] =desk.getPoke();
        WritableArray writableArray_ = new WritableNativeArray();
        putPoke(poke[0],writableArray_);
        if(card!=null||size==0)
           desk.gaming();
        int i[] =new int[0];
        putPoke(desk.persons[2].card==null?i:desk.persons[2].card.pokes,writableArray_);
        if(card!=null||size==0)
            desk.gaming();
        putPoke(desk.persons[1].card==null?i:desk.persons[1].card.pokes,writableArray_);
        callback.invoke(writableArray_);
    }
   private  void putPoke(int poke[], WritableArray writableArray){
       WritableArray writableArray_ = new WritableNativeArray();
       if(poke.length==0){
           WritableMap  writableMap =new WritableNativeMap();
           writableArray_.pushMap(writableMap);
       }else
       for(int n=0;n<poke.length;n++) {
           WritableMap  writableMap =new WritableNativeMap();
           writableMap.putString("poke",new Integer(poke[n]).toString());
           writableMap.putBoolean("visible",false);
           writableArray_.pushMap(writableMap);
       }
       writableArray.pushArray(writableArray_);
   }

}