package io.appery.project571647;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
/**
 * Created by Sarun on 24-12-2015.
 */
public class SplashActivity extends Activity
{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);  // Need full screen without title bars for splash screen
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN );
        setContentView(R.layout.splash_activity);
        Thread t = new Thread(){
            public void run(){
                try {
                    Thread.sleep(5000);  // change the time according to your needs(its in milliseconds)
                    Intent i = new Intent(getApplicationContext(),MainActivity.class);     // change the activity you want to load
                    startActivity(i);
                    finish();
                } catch (InterruptedException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
        };
        t.start();
    }
}