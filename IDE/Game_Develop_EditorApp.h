/** \file
 *  Game Develop
 *  2008-2014 Florian Rival (Florian.Rival@gmail.com)
 */

#ifndef GAME_DEVELOP_EDITORAPP_H
#define GAME_DEVELOP_EDITORAPP_H

#include <iostream>
#include <wx/app.h>
#include <wx/log.h>
#include <wx/ipc.h>
#include <wx/snglinst.h>
#include "GDCore/PlatformDefinition/Project.h"
#include "GDCore/CommonTools.h"
#include "MainFrame.h"
class STServer;

/**
 * \brief Class managing the application, e.g. its initialization, creation of the main window...
 */
class Game_Develop_EditorApp : public wxApp
{
public:
    virtual bool    OnInit();
    virtual int     OnExit();
    #ifndef DEBUG
    virtual void    OnUnhandledException();
    #endif
    virtual bool    OnExceptionInMainLoop();
    virtual void    OnKeyPressed(wxKeyEvent& event) { if (mainEditor) mainEditor->OnKeyDown(event);};

    MainFrame * mainEditor;
    wxSingleInstanceChecker * singleInstanceChecker;
    STServer * server;
};

/** \brief Tool class used when dealing with interprocess communications.
 */
class STConnection : public wxConnection
{
public:
    STConnection() {}
    ~STConnection() {}

    virtual bool OnExec(const wxString & topic, const wxString &data);
};

/** \brief Tool class used when dealing with interprocess communications by the first instance.
 */
class STServer : public wxServer
{
public:
    wxConnectionBase * OnAcceptConnection(const wxString & topic)
    {
        if ( topic != "Game Develop IDE" ) return NULL;

        //Check that there are no modal dialogs active
        wxWindowList::Node * node = wxTopLevelWindows.GetFirst();
        while(node)
        {
            wxDialog * dialog = wxDynamicCast(node->GetData(), wxDialog);
            if ( dialog && dialog->IsModal() ) return NULL;

            node = node->GetNext();
        }

        return new STConnection;
    }
};

class STClient : public wxClient
{
public:
    STClient() {};
    wxConnectionBase * OnMakeConnection() { return new STConnection; };
};

#endif // GAME_DEVELOP_EDITORAPP_H

