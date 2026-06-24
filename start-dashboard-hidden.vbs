' WebADN — Arranca el dashboard SIN ventana de terminal visible.
' Doble clic sobre este archivo abre el navegador; node corre en background.
' Para detener el servidor: botón "Stop" del dashboard, o stop-dashboard.bat.

Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

projectDir = fso.GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = projectDir

' 1) Comprobar que Node está instalado (silencioso).
ExitCode = WshShell.Run("cmd /c where node >nul 2>&1", 0, True)
If ExitCode <> 0 Then
    MsgBox "Node.js no está instalado." & vbCrLf & _
           "Descárgalo de https://nodejs.org (versión LTS, 20 o superior).", _
           vbCritical, "WebADN"
    WScript.Quit 1
End If

' 2) Primera ejecución: instalar dependencias (VISIBLE, porque tarda minutos).
If Not fso.FolderExists(projectDir & "\node_modules\playwright") Then
    MsgBox "Primera ejecución: se van a instalar las dependencias." & vbCrLf & _
           "Puede tardar varios minutos. No cierres la ventana negra.", _
           vbInformation, "WebADN"
    ' npm install (ventana visible, espera a terminar)
    ExitCode = WshShell.Run("cmd /c npm install", 1, True)
    If ExitCode <> 0 Then
        MsgBox "Falló 'npm install'. Revisa el error.", vbCritical, "WebADN"
        WScript.Quit 1
    End If
    ' Playwright Chromium (ventana visible, espera a terminar)
    ExitCode = WshShell.Run("cmd /c npx playwright install chromium", 1, True)
    If ExitCode <> 0 Then
        MsgBox "Falló la instalación de Chromium.", vbCritical, "WebADN"
        WScript.Quit 1
    End If
End If

' 3) Arrancar el servidor OCULTO. Guardamos su PID en webadn-server.pid
'    para que stop-dashboard.bat pueda detenerlo.
'    Ejecutamos vía cmd para capturar el PID con !PPID! (cscript/wscript no exponen PID).
Dim cmd, pidFile
pidFile = projectDir & "\webadn-server.pid"
cmd = "cmd /c " & _
      "node src/server.js & " & _
      "for /f %%P in ('powershell -NoProfile -Command ""(Get-CimInstance Win32_Process -Filter \""Name='node.exe'\"" | Sort-Object CreationDate -Descending | Select-Object -First 1).ProcessId""') do echo %%P> """ & pidFile & """"

' WindowStyle 0 = oculto. El servidor vive sin ventana ni icono en la taskbar.
WshShell.Run cmd, 0, False

' 4) Esperar a que el puerto 4173 responda antes de abrir el navegador.
Dim ready
ready = False
For i = 1 To 60  ' hasta ~60s
    WScript.Sleep 1000
    ExitCode = WshShell.Run("cmd /c powershell -NoProfile -Command ""try{(New-Object Net.Sockets.TcpClient('127.0.0.1',4173)).Close();exit 0}catch{exit 1}""", 0, True)
    If ExitCode = 0 Then
        ready = True
        Exit For
    End If
Next

' 5) Abrir el navegador.
If ready Then
    WshShell.Run "http://127.0.0.1:4173/"
Else
    MsgBox "El servidor no respondió tras 60s." & vbCrLf & _
           "Arranca start-dashboard.bat para ver el error en la terminal.", _
           vbExclamation, "WebADN"
End If
