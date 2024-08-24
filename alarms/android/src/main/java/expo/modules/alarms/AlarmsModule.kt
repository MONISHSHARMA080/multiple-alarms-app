package expo.modules.alarms

import android.content.Context
import android.content.Intent
import android.app.PendingIntent
import android.app.AlarmManager
import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.util.*

import android.util.Log
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.BroadcastReceiver
import android.widget.Toast
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

class AlarmsModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("Alarms")

        Function("setAlarm") { hour: Int, minutes: Int, message: String, requestCode: Int ->
            setAlarm(hour, minutes, message, requestCode)
        }

        Function("cancelAlarm") { requestCode: Int ->
            cancelAlarm(requestCode)
        }
    }

    private val context get() = requireNotNull(appContext.reactContext)

    private fun setAlarm(hour: Int, minutes: Int, message: String, requestCode: Int) {
    val calendar = Calendar.getInstance().apply {
        set(Calendar.HOUR_OF_DAY, hour)
        set(Calendar.MINUTE, minutes)
        set(Calendar.SECOND, 0)
    }
        val ii = minutes.toString()
    Log.d("AlarmsModule", "HELLO WORLD"+ii)

    val alarmIntent = Intent(context, AlarmReceiver::class.java).apply {
        putExtra("ALARM_MESSAGE", message)
        putExtra("NOTIFICATION_ID", requestCode)  // Pass requestCode as notificationId
    }

    val pendingIntent = PendingIntent.getBroadcast(
        context,
        requestCode,
        alarmIntent,
        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )

    val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        alarmManager.setExactAndAllowWhileIdle(
            AlarmManager.RTC_WAKEUP,
            calendar.timeInMillis,
            pendingIntent
        )
    } else {
        alarmManager.setExact(
            AlarmManager.RTC_WAKEUP,
            calendar.timeInMillis,
            pendingIntent
        )
    }
}


    private fun cancelAlarm(requestCode: Int) {
        val alarmIntent = Intent(context, AlarmReceiver::class.java)
        val pendingIntent = PendingIntent.getBroadcast(
            context,
            requestCode,
            alarmIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        alarmManager.cancel(pendingIntent)
    }
}


class AlarmReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
        Log.d("AlarmsModule","udbc")
        val message = intent?.getStringExtra("ALARM_MESSAGE") ?: "Alarm!"
        val notificationId = intent?.getIntExtra("NOTIFICATION_ID", 0) ?: 0

    }

}